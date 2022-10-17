import getAnswer from './cli.js';

export default (generateRound, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = getAnswer('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let winCount = 0; winCount < 3;) {
    const [userAnswer, correctAnswer] = generateRound();
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer !== correctAnswer.toString()) {
      return console.log(` '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
    winCount += 1;
    console.log('Correct!');

    if (winCount === 3) (console.log(`Congratulations, ${userName}!`));
  }
};
