const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Module 6",
    password: "password",
    port: 5432,
});

module.exports = pool;
