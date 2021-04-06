const { Database } = require("sqlite3");
const path = require("path");
const location = path.join(__dirname, "db.sqlite");

module.exports = new Database(location);
