const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const result = array.find(superbowl => {
    return superbowl.result == 'W';
  });
  return result ? result.year : undefined;
}
