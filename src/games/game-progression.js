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

  const aRandom = getProgression(start, step, end);
  const indexToReplace = getRandomNum(0, end);
  const progression = [...aRandom];
  const getRandomHiddenItem = () => {
    progression.splice(indexToReplace, 1, '..');
    return progression.toString().replaceAll(',', ' ');
  };
  const processedQuestion = getRandomHiddenItem();

  const question = getAnswer(`Question: ${processedQuestion} `);
  const correctAnswer = aRandom[indexToReplace];

  return [question, correctAnswer];
};

export default () => gameEngine(generateRound, 'What number is missing in the progression?');
