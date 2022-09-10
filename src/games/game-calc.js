import engine from '../index.js';
import getRandomNum from '../getRandomNum.js';
import getRandomOperator from '../getRandomOperator.js';

export default (userName) => {
  const firstOperation = `${getRandomNum()} ${getRandomOperator()} ${getRandomNum()}`;
  const secondOperation = `${getRandomNum()} ${getRandomOperator()} ${getRandomNum()}`;
  const thirdOperation = `${getRandomNum()} ${getRandomOperator()} ${getRandomNum()}`;
  engine(userName, firstOperation, secondOperation, thirdOperation);
};
