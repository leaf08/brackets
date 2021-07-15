module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 > 0) return false;
  stack = [];
  for (let sym of str) {
    bracketsConfig.map(bracket => {
      if(sym === bracket[0]) {
        if(bracket[0] !== bracket[1]) stack.push(sym);
        else if(bracket[0] !== stack[stack.length-1]) stack.push(sym);
        else  stack.pop();
      }
      else if(sym === bracket[1] && bracket[0] === stack[stack.length-1]) {
        stack.pop();
      }
    });
  }
  if(stack.length === 0) return true;
  return false;
}
