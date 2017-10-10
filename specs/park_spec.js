var assert = require("assert")
var Park = require("../park")
var Dinosaur = require("../dinosaur")

describe("Park", () => {
  var park
  var tRex
  var raptor
  var diplo
  var ptero

  beforeEach(() => {
    park = new Park()
    tRex = new Dinosaur("Tyrannosaurus rex", 3)
    raptor = new Dinosaur("Velociraptor mongoliensis", 5)
    diplo = new Dinosaur("Diplodocus carnegii", 1)
    ptero = new Dinosaur("Pterodactylus antiquus", 2)
  })

  it("should start empty", () => {
    assert.strictEqual(park.count(), 0)
  })

  it("should be able to add a dinosaur", () => {
    park.add(raptor)
    assert.strictEqual(park.count(), 1)
  })

  it("should be able to add multiple dinosaurs", () => {
    park.add(tRex)
    park.add(ptero)
    assert.strictEqual(park.count(), 2)
  })

  it("should be able to remove by species", () => {
    park.add(tRex)
    park.add(raptor)
    park.add(raptor)
    park.removeBySpecies("Velociraptor mongoliensis")
    assert.strictEqual(park.count(), 1)
  })

  it("should be able to return by offspring count", () => {
    park.add(tRex)
    park.add(raptor)
    park.add(diplo)
    park.add(ptero)
    
    result = park.getDinosWithOffspringAtLeast(3)

    assert.strictEqual(result.length, 2)
    assert.ok(result.includes(tRex))
    assert.ok(result.includes(raptor))
  })

  it("should be able to calulate population after X years", () => {
    park.add(tRex)
    park.add(ptero)

    afterYear1 = park.getPopulationAfterYear(1)
    afterYear2 = park.getPopulationAfterYear(2)
    afterYear3 = park.getPopulationAfterYear(3)

    assert.strictEqual(afterYear1, 7)
    assert.strictEqual(afterYear2, 25)
    assert.strictEqual(afterYear3, 91)
  })
})
