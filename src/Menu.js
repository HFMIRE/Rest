const db = require("../src/db.js");

class Menu {
  constructor(title, icon) {
    this.title = title;
    this.icon = icon;
  }
  save(cb) {
    db.run(
      "INSERT INTO Menu( title, icon) VALUES (?,?)",
      [this.title, this.icon],
      cb
    );
  }
}
module.exports = Menu;
