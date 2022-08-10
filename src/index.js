module.exports = function check(str, ...arg) {
  const arr = arg.flat(1);
  const brackets = {};
  for (let item of arr) {
    brackets[item[0]] = item[1];
  }
  function isOpenBracket(x) {
    return x in brackets ? true : false;
  }
  function isSameBracket(x) {
    return brackets[x] === x ? true : false;
  }
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (isSameBracket(current)) {
      if (current === brackets[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        stack.push(current);
      }
    } else {
      if (isOpenBracket(current)) {
        stack.push(current);
      } else {
        if (stack.length === 0) {
          return false;
        } else {
          if (current === brackets[stack[stack.length - 1]]) {
            stack.pop();
          } else {
            return false;
          }
        }
      }
    }
  }
  return stack.length === 0;
};
