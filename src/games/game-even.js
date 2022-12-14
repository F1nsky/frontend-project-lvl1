import gameEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const randomNum = getRandomNum(0, 98);
  const question = `${randomNum}`;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => gameEngine(generateRound, 'Answer "yes" if the number is even, otherwise answer "no".');
