const db = require("../src/db.js");
const Restaurant = require("../src/Restaurant.js");

describe("Basic restaurant tests", () => {
  // Arrange
  beforeAll((done) => {
    db.run(
      "CREATE TABLE IF NOT EXISTS Restaurant(id INTEGER PRIMARY KEY, name TEXT, image TEXT)",
      done
    );
  });
  //Arrange
  test("can save restaurant data", (done) => {
    const restaurant = new Restaurant(
      "Spice Merchant",
      "www.unsplash/jkalsjdka"
    );
    // Act
    restaurant.save(() => {
      db.get(
        "SELECT * FROM Restaurant WHERE name=?",
        ["Spice Merchant"],
        (err, row) => {
          // Assign
          expect(row.image).toEqual("www.unsplash/jkalsjdka");
          expect(row.id).toEqual(1);
          done();
        }
      );
    });
  });
});
