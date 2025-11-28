// 글 목록 조회
app.get("/boards", async (req, res) => {
  const data = await pool.query("SELECT * FROM board");
  console.log(data);
  res.send(data);
});

app.post("/board", async (req, res) => {
  const { board_id, title, content, author, create_date } = req.body;
  pool.execute("INSERT INTO board VALUES(?, ?, ?, ? ,?", [
    board_id,
    title,
    content,
    author,
    create_date,
  ]);
});
