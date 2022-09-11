#!/usr/bin/env node

import getRandomNum from '../src/getRandomNum.js';
import getAnswer from '../src/cli.js';

let winCount = 0;
let loseCount = 0;
let result = '';

console.log('Welcome to the Brain Games!');

const userName = getAnswer('May I have your name? ');

console.log(`Hello, ${userName}!`); // задаем вопрос 'May I have your name?' и  подставляем ответ пользователя в текст 'Hello, {имя пользователя}!'

console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (winCount < 3 && loseCount < 1) {
  const randomNum1 = getRandomNum();
  const randomNum2 = getRandomNum();
  const userAnswer = getAnswer(`Question: ${randomNum1} ${randomNum2} `);
  console.log(`Your answer: ${userAnswer}`); // задаем вопрос 'Question:' и подставлем ответ в текст 'Your answer: {ответ пользователя}'

  const getRigthAnswer = (a, b) => {
    if (!b) {
      return a;
    }
    return getRigthAnswer(b, a % b);
  };

  const rigthAnswer = getRigthAnswer(randomNum1, randomNum2);

  if (userAnswer === rigthAnswer.toString()) {
    console.log('Correct!');
    winCount += 1;
  } else {
    console.log(` '${userAnswer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
    loseCount += 1;
  }
}

const lostGame = `Let's try again, ${userName}!`;
const winGame = `Congratulations, ${userName}!`;

const checkResult = () => {
  if (winCount === 3) {
    result = winGame;
  }

  if (loseCount > 0) {
    result = lostGame;
  }
  return result;
};

console.log(checkResult());
