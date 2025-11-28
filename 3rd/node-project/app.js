const express = require("express");
const fs = require("fs");
const cors = require("cors");
const crypto = require("crypto");
const { pool, createEncPassword } = require("./db.js");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json()); // 요청 정보 body에 json 처리

app.listen(PORT, () => {
  console.log("server running ");
});

app.get("/", (req, res) => {
  console.log("서버 실행");
});

app.get("/index", (req, res) => {
  fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
      return;
    }
    let html = data.split("\r\n").reduce((acc, elem) => {
      acc += "<li>" + elem + "</li>";
      return acc;
    }, "<ul>");
    res.send(html + "</ul>");
  });
});

app.post("/user", async (req, res) => {
  console.log(req.body);
  const { id, pw, name } = req.body;

  const salt = await new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        reject(err);
        return;
      }
      const salt = buf.toString("base64"); // 암호화 된듯한 구문
      resolve(salt);
    });
  });

  let result = await createEncPassword(pw, salt);

  let rows = await pool.execute("INSERT INTO users VALUES (?, ?, ?, ?)", [
    id,
    result.password,
    result.salt,
    name,
  ]);
  console.log(rows);
  if (rows[0].affectedRows == 1) {
    res.send("정상 등록");
  } else {
    res.send("예외 발생.");
  }
});

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("select * from users");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  res.send("done");
});

app.get("/login/:id/:pw", async (req, res) => {
  const { id, pw } = req.params;
  let result = await pool.query(
    "SELECT user_pw, salt FROM users WHERE user_id = ?",
    [id]
  );

  if (result[0].length == 0) {
    res.send("존재하지 않는 아이디!");
    return;
  }

  console.log(result[0]);
  const { user_pw, salt } = result[0][0];
  let data = await createEncPassword(pw, salt);
  console.log(data.password, user_pw);

  if (data.password == user_pw) {
    res.send("로그인 성공");
  } else {
    res.send("로그인 실패");
  }
});

// 글 목록 조회
app.get("/boards", async (req, res) => {
  const data = await pool.query("SELECT * FROM board");
  console.log(data[0]);
  res.send(data[0]);
});

app.post("/board", async (req, res) => {
  const { board_id, title, content, author } = req.body;
  pool.execute(
    "INSERT INTO board(board_id, title, content, author) VALUES(?, ?, ?, ?)",
    [board_id, title, content, author]
  );
});
