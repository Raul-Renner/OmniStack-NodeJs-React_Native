const knex = require("knex");
const configurate = require('../../knexfile');

const connection = knex(configurate.development);

module.exports = connection;