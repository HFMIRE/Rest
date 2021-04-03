const ORM = require("../src/ORM");

describe("basic ORM test", () => {
  test("testing the methods", (done) => {
    // Arrange
    const pasta = new ORM("Product", "Lasanga", 11);

    // Act
    pasta.createTable();
    pasta.insertItem();
    pasta.selectItem(() => {
      (err, row) => {
        // Assert
        expect(row.name).toEqual("Lasanga");
        expect(row.price).toEqual(11);
        expect(row.id).toEqual(1);
      };
    });
    done();
  });
});
