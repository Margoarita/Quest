let pgp = require('pg-promise')();

let db = pgp('postgres://postgres:iq666@localhost:5432/mybd');

module.exports = db;