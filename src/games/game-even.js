import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const generateRound = () => {
  let randomNum;

  const question = () => {
    randomNum = getRandomNum();
    return getAnswer(`Question: ${randomNum} `);
  };

  const getCorrectAnswer = () => (randomNum % 2 === 0 ? 'yes' : 'no');

  return [question(), getCorrectAnswer()];
};

export default () => gameEngine(generateRound);
