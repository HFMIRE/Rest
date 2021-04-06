const db = require("../src/db");
const Item = require("../src/Item");

describe("Basic item Test", () => {
  // Arrange
  beforeAll((done) => {
    db.run(
      "CREATE TABLE IF NOT EXISTS Item (id INTEGER PRIMARY KEY, name TEXT, price INT, menu_id INTEGER)",
      done
    );
  });
  // Arrange
  test("can save item data", (done) => {
    const item = new Item("Spaghetti", 10);
    //Act
    item.save(() => {
      db.get("SELECT * FROM Item WHERE name=?", ["Spaghetti"], (err, row) => {
        // Assign
        expect(row.name).toEqual("Spaghetti");
        expect(row.id).toEqual(1);
        done();
      });
    });
  });
});
