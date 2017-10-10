var Park = function () {
  this.enclosure = []
}

Park.prototype.count = function () {
  return this.enclosure.length
}

Park.prototype.add = function (dinosaur) {
  return this.enclosure.push(dinosaur)
}

Park.prototype.removeBySpecies = function (speciesToRemove) {
  var dinosToKeep = []
  for (var dinosaur of this.enclosure) {
    if (dinosaur.species === speciesToRemove) continue;
    dinosToKeep.push(dinosaur)
  }
  this.enclosure = dinosToKeep
}

Park.prototype.getDinosWithOffspringAtLeast = function (minimumOffspring) {
  var dinosToReturn = []
  for (var dinosaur of this.enclosure) {
    if (dinosaur.yearlyOffspring >= minimumOffspring) {
      dinosToReturn.push(dinosaur)
    }
  }
  return dinosToReturn
}

Park.prototype.getPopulationAfterYear = function (year) {
  var addYearlyBirths = (enclosure) => {
    // Clone current dinos into new array
    var newEnclosure = enclosure.slice()
    for (var dinosaur of enclosure) {
      for (var i = 0; i < dinosaur.yearlyOffspring; i++) {
        newEnclosure.push(dinosaur)
      }
    }
    return newEnclosure
  }

  var afterEnclosure = this.enclosure.slice()
  for (var i = 0; i < year; i++) {
    afterEnclosure = addYearlyBirths(afterEnclosure)
  }

  return afterEnclosure.length
}

module.exports = Park
