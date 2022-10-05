import getAnswer from './cli.js';

console.log('Welcome to the Brain Games!');
const userName = getAnswer('May I have your name? ');
console.log(`Hello, ${userName}!`);

export default (question, getCorrectAnswer) => {
  let result;
  for (let winCount = 0; winCount < 3;) {
    const userAnswer = question();
    console.log(`Your answer: ${userAnswer}`);
    const correctAnswer = getCorrectAnswer();
    if (userAnswer !== correctAnswer.toString()) {
      result = console.log(` '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return result;
    }
    winCount += 1;
    result = console.log('Correct!');

    if (winCount === 3) (result = console.log(`Congratulations, ${userName}!`));
  }
  return result;
};
