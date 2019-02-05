// Code your solution in this file.
function lowerCaseDrivers(array) {

  let lowerCasedArray = array.map(function(x) {
    return x.toLowerCase();
  })
  return lowerCasedArray;
}

function nameToAttributes(array) {
  let objectifiedNames = array.map(function(x) {
    objectifiedNames.x["firstName"] = x.split(" ")[0]
    objectifiedNames.x["lastName"] = x.split(" ")[1]
  })

  return objectifiedNames;
}
