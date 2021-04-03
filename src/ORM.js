const db = require("../src/db");
class ORM {
  constructor(table, name, price) {
    //  each object has a table and column
    this.table = table;
    this.name = name;
    this.price = price;
  }

  createTable(cb) {
    const use = [
      "id INTEGER PRIMARY KEY",
      "name TEXT",
      "price INT",
      "menu_id INTEGER",
    ];
    // create a method that creates a new table - create table
    db.run(`CREATE TABLE IF NOT EXISTS ${this.table} (${use.join(" , ")})`, cb);
  }
  insertItem(cb) {
    // be able to add new row data to the table - insert into
    db.run(
      `INSERT INTO ${this.table} (name, price) VALUES (?,?)`,
      [this.name, this.price],
      cb
    );
  }
  selectItem(cb) {
    //filter the rows from the table - select
    db.get(`SELECT * FROM ${this.table} WHERE name=?`, [this.name], cb);
  }
}

module.exports = ORM;
