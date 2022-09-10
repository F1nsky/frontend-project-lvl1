import engine from '../index-test.js';
import getRandomNum from '../getRandomNum.js';
import getAnswer from '../cli.js';

export default (userName) => {
  const randomNum = getRandomNum();
  const userAnswer = getAnswer(`Question: ${randomNum} `);
  console.log(`Your answer: ${userAnswer}`);

  // for (let i = 0; i < 3; i += 1)

  const correctAnswer = () => {
    if (randomNum % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const rigthAnswer = correctAnswer();

  /*  const firstOperation = `${getRandomNum()};`;
  const secondOperation = `${getRandomNum()}`;
  const thirdOperation = `${getRandomNum()}`; */

  engine(userName, rigthAnswer, userAnswer);
};
