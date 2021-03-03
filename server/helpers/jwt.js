const jwt = require("jsonwebtoken");
// const { SECRET_KEY } = process.env;
const SECRET_KEY = "KOMPAS_BACKEND";

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY);
}

function decodeToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = { createToken, decodeToken }