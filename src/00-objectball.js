const numPointsScored = function (name) {
 const score = gameObject()
 
 return score['place']['players'][name][points]
}
const shoeSize = function (shoes) {
    const size = gameObject()
    return size['place']['players']['name'][shoes]
}

console.log("   Object.keys(game) =>", Object.keys(game));
console.log(" Object.values(game) =>", Object.values(game));
console.log("Object.entries(game) =>", Object.entries(game));
