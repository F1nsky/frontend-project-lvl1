import gameEngine from '../index-test.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

console.log("Answer 'yes' if number even otherwise answer 'no'.");

let randomNum;

const question = () => {
  randomNum = getRandomNum();
  const result = getAnswer(`Quetion: ${randomNum} `);
  return result;
};

const getCorrectAnswer = () => {
  let result = 'no';
  if (randomNum % 2 === 0) {
    result = 'yes';
  }
  return result;
};

export const gameEven = () => gameEngine(question, getCorrectAnswer);
