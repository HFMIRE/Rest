const db = require("../src/db.js");
const Menu = require("../src/Menu");

describe("Basic menu Test", () => {
  // Arrange
  beforeAll((done) => {
    db.run(
      "CREATE TABLE IF NOT EXISTS Menu (id INTEGER PRIMARY KEY, title TEXT, icon VARCHAR(50), restaurant_id TEXT)",
      done
    );
  });
  // Arrange
  test("can save menu data", (done) => {
    const menu = new Menu("Starter", "🥣");
    //Act
    menu.save(() => {
      db.get("SELECT * FROM Menu WHERE title=?", ["Starter"], (err, row) => {
        // Assign
        expect(row.icon).toEqual("🥣");
        expect(row.id).toEqual(1);
        done();
      });
    });
  });
});
