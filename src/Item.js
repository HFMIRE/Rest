const db = require("../src/db.js");
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  save(cb) {
    db.run(
      "INSERT INTO Item (name, price) VALUES (?,?)",
      [this.name, this.price],
      cb
    );
  }
}
module.exports = Item;
