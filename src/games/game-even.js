import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

const generateRound = () => {
  const randomNum = getRandomNum();
  const question = getAnswer(`Question: ${randomNum} `);
  const isEven = (num) => (num % 2 === 0);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => gameEngine(generateRound, 'Answer "yes" if the number is even, otherwise answer "no".');
