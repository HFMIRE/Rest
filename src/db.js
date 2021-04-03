const { Database } = require("sqlite3");

const location = "./db.sqlite";

module.exports = new Database(location);
