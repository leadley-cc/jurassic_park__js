var assert = require("assert")
var Dinosaur = require("../dinosaur")

describe("Dinosaur", () => {
  var tRex

  beforeEach(() => {
    tRex = new Dinosaur("Tyrannosaurus Rex", 3)
  })

  it("has a species", () => {
    assert.strictEqual(tRex.species, "Tyrannosaurus Rex")
  })

  it("has a number of yearly offspring", () => {
    assert.strictEqual(tRex.yearlyOffspring, 3)
  })
})
