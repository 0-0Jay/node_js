const mysql = require("mysql2/promise");
const crypto = require("crypto");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  port: 3306,
  user: "dev01",
  password: "dev01",
  database: "dev",
});

// 암호화 함수
function createEncPassword(pw, salt) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(pw, salt, 100000, 64, "sha512", (err2, key) => {
      if (err2) {
        reject(err2);
        return;
      }
      const cryptoPass = key.toString("base64");
      resolve({ salt: salt, password: cryptoPass });
    });
  });
}

module.exports = { pool, createEncPassword };
