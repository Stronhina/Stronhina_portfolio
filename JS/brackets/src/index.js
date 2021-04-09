module.exports = function check(str, bracketsConfig) {
  let tempStack = [];

  //create array with brackets templates
  let openBrackets = [];
  let closeBrackets = [];
  let sameBrackets = [];

  let openBracketItem;
  let closeBracketItem;
  let sameBracketItem;

  //fill openBrackets and closeBrackets array from bracketsConfig
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
      sameBrackets.push(bracketsConfig[i][0]);
      continue;
    }
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  //go through the string and check every symbol
  for (let j = 0; j < str.length; j++) {

    //find same bracket and push it, if it equals stack last item and pop if no
    sameBracketItem = str.charAt(j);
    if (sameBrackets.indexOf(sameBracketItem) !== -1) {
      tempStack[tempStack.length - 1] == sameBracketItem ? tempStack.pop() : tempStack.push(sameBracketItem);
      continue;
    }

    //find open bracket and push it to the stack
    openBracketItem = str.charAt(j);
    if (openBrackets.indexOf(openBracketItem) !== -1) {
      tempStack.push(openBracketItem);
      continue;
    }

    //find close bracket and compare it with open braket in the stack
    closeBracketItem = str.charAt(j);
    if (closeBrackets.indexOf(closeBracketItem) !== -1) {
      openBracketItem = tempStack.pop();
      if (openBrackets.indexOf(openBracketItem) !== closeBrackets.indexOf(closeBracketItem)) {
        return false;
      }
    }

  }

  if (tempStack.length !== 0) {
    return false;
  }

  return true;
}
