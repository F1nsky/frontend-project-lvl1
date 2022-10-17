import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

const getProgression = (start, step, end) => {
  const progression = [start];
  for (let i = 1; progression.length <= end; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNum();
  const step = getRandomNum();
  const end = getRandomNum(5, 10);

  const randomProgression = getProgression(start, step, end);
  const indexToReplace = getRandomNum(0, end);
  const correctAnswer = randomProgression[indexToReplace];

  const getRandomHiddenItem = () => {
    randomProgression.splice(indexToReplace, 1, '..');
    return randomProgression.join(' ');
  };
  const processedQuestion = getRandomHiddenItem();

  const question = getAnswer(`Question: ${processedQuestion} `);

  return [question, correctAnswer];
};

export default () => gameEngine(generateRound, 'What number is missing in the progression?');
