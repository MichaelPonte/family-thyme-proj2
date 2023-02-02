const bcrypt = require('bcrypt');

async function hashPassword(plaintextPassword) {
  return bcrypt.hash(plaintextPassword, 10);
}

async function comparePassword(plaintextPassword, hashedPassword) {
  return bcrypt.compare(plaintextPassword, hashedPassword);
}

module.exports = { hashPassword, comparePassword };
