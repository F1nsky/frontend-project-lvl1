import getAnswer from './cli.js';

export default (userName, firstOperation, secondOperation, thirdOperation) => {
  let winCount = 0;
  let loseCount = 0;
  let result = '';
  let substitution = firstOperation;

  while (winCount < 3 && loseCount < 1) {
    if (winCount === 1) {
      substitution = secondOperation;
    }

    if (winCount === 2) {
      substitution = thirdOperation;
    }

    const userAnswer = getAnswer(`Question: ${substitution} `);
    console.log(`Your answer: ${userAnswer}`); // задаем вопрос 'Question:' и подставлем ответ в текст 'Your answer: {ответ пользователя}'

    // eslint-disable-next-line no-eval
    const correctAnswer = eval(substitution);

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
};
