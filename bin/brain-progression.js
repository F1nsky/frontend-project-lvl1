#!/usr/bin/env node

import getRandomNum from '../src/getRandomNum.js';
import getAnswer from '../src/cli.js';

let winCount = 0;
let loseCount = 0;
let result = '';

console.log('Welcome to the Brain Games!');

const userName = getAnswer('May I have your name? ');

console.log(`Hello, ${userName}!`); // задаем вопрос 'May I have your name?' и  подставляем ответ пользователя в текст 'Hello, {имя пользователя}!'

console.log('What number is missing in the progression?');

while (winCount < 3 && loseCount < 1) {
  const firstItem = getRandomNum();
  const increment = getRandomNum();
  const progressionLength = getRandomNum(5, 10);

  const getNewArray = () => {
    const array = [firstItem];
    for (let i = 1; array.length <= progressionLength; i += 1) {
      array[i] = array[i - 1] + increment;
    }
    return array;
  };

  const newArray = getNewArray(firstItem, increment);
  const replaceIndex = getRandomNum(0, progressionLength);
  const correctAnswer = newArray[replaceIndex];

  const randomHiddenItem = () => {
    const copyArray = newArray;

    copyArray.splice(replaceIndex, 1, '..');
    copyArray.toString();

    return copyArray.toString();
  };

  const addHiddenItem = randomHiddenItem(newArray);
  const question = addHiddenItem.replaceAll(',', ' ');

  const userAnswer = getAnswer(`Question: ${question} `);
  // задаем вопрос 'Question:' и подставлем ответ в текст 'Your answer: {ответ пользователя}'
  console.log(`Your answer: ${userAnswer}`);
  if (userAnswer === correctAnswer.toString()) {
    console.log('Correct!');
    winCount += 1;
  } else {
    console.log(` '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
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
