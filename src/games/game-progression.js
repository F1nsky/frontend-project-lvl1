import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

console.log('What number is missing in the progression?');

const generateRound = () => {
  const firstItem = getRandomNum();
  const increment = getRandomNum();
  const progressionLength = getRandomNum(5, 10);

  const getRandomArray = () => {
    const array = [firstItem];
    for (let i = 1; array.length <= progressionLength; i += 1) {
      array[i] = array[i - 1] + increment;
    }
    return array;
  };

  const randomArray = getRandomArray();
  const replaceIndex = getRandomNum(0, progressionLength);

  const question = () => {
    const progression = [...randomArray];

    const randomHiddenItem = () => {
      progression.splice(replaceIndex, 1, '..');
      return progression.toString();
    };
    const addHiddenItem = randomHiddenItem();
    const processedQuestion = addHiddenItem.replaceAll(',', ' ');
    return getAnswer(`Question: ${processedQuestion} `);
  };

  const getCorrectAnswer = () => randomArray[replaceIndex];
  return [question(), getCorrectAnswer()];
};

export default () => gameEngine(generateRound);
