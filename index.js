const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArray) {
  let winner = objArray.find(function(game) {
    return game.result === "W"
  })
  return winner ? winner.year : undefined
}
