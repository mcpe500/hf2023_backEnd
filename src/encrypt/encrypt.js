const bcrypt = require('bcrypt');

const saltRounds = 10;
const salt = require('../config/env.json').salt;

module.exports = {
  enkripsi: async function(password) {
    try {
      const hash = await bcrypt.hash(password, saltRounds);
      console.log(hash);
      return hash;
    } catch (err) {
      console.error(err);
      return null;
    }
  },
  check: async function(password, hash) {
    try {
      const match = await bcrypt.compare(password, hash);
      return match;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
};
