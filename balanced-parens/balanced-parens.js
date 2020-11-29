const parensAreBalanced = (input) => {
  let splitInput = input.split("");

  return !splitInput.reduce((prevChar, current) => {
    if (current === "(" || current === "{" || current === "[") {
      return ++prevChar;
    } else if (current === ")" || current === "}" || current === "]") {
      return --prevChar;
    }

    return prevChar;
  }, 0);
};

module.exports = parensAreBalanced;