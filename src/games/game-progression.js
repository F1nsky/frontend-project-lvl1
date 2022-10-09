import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

console.log('What number is missing in the progression?');

const getProgression = (start, step, end) => {
  const array = [start];
  for (let i = 1; array.length <= end; i += 1) {
    array[i] = array[i - 1] + step;
  }
  return array;
};

const generateRound = () => {
  const start = getRandomNum();
  const step = getRandomNum();
  const end = getRandomNum(5, 10);

  const randomArray = getProgression(start, step, end);
  const replaceIndex = getRandomNum(0, end);
  const progression = [...randomArray];
  const randomHiddenItem = () => {
    progression.splice(replaceIndex, 1, '..');
    return progression.toString().replaceAll(',', ' ');
  };
  const processedQuestion = randomHiddenItem();

  const question = getAnswer(`Question: ${processedQuestion} `);
  const correctAnswer = randomArray[replaceIndex];

  return [question, correctAnswer];
};

export default () => gameEngine(generateRound);
