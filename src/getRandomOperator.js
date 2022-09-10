import getRandomNum from './getRandomNum.js';

export default () => {
  const operators = ['+', '-', '*', '/'];
  let result = '';
  const num = getRandomNum(0, 40);

  if (num <= 10) {
    result = operators[0];
  }

  if (num > 10 && num <= 20) {
    result = operators[1];
  }

  if (num > 20 && num <= 30) {
    result = operators[2];
  }

  if (num > 30) {
    result = operators[3];
  }
  return result;
};
