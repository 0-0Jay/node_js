const crypto = require("crypto");

// let password = crypto
//   .createHash("sha512") // 암호화 방식 지정
//   .update("pw1234") // 평문 지정
//   .digest("base64"); // 인코딩 방식 지정

// console.log(password);
async function createCryptoPassword(plainPassword, salt) {
  // const salt = await new Promise((resolve, reject) => {
  //   crypto.randomBytes(64, (err, buf) => {
  //     if (err) {
  //       reject(err);
  //       return;
  //     }
  //     const salt = buf.toString("base64"); // 암호화 된듯한 구문
  //     resolve(salt);
  //   });
  // });
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, "sha512", (err2, key) => {
      if (err2) {
        reject(err2);
        return;
      }
      const cryptoPass = key.toString("base64");
      resolve({ salt: salt, password: cryptoPass });
    });
  });
}

// createCryptoPassword("pw1234")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

function checkPassword(loginPassword) {
  const salt =
    "JzyufDUuBhfozqQUSmSKRUmSuQ7XdyX8psDPnr8uX6CILkPB7Bj8zu62UEWes3qEhEQpNj/PpCqv9pOOZu4Ozw==";
  const dbPassword =
    "E16cN7LFqHzOudAh+hRbfFofv/kZTEt1ia6RAswGdtlCMr8yR4ZwY26s7xkRJ5SOkRT8NkQEtHP17B3Wc0dT9Q==";

  return createCryptoPassword(loginPassword, salt).then((res) => {
    if (dbPassword == res.password) return true;
    else return false;
  });
}

checkPassword("pw1234").then((res) => console.log(res));
