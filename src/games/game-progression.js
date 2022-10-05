import gameEngine from '../index.js';
import getAnswer from '../cli.js';
import getRandomNum from '../getRandomNum.js';

console.log('What number is missing in the progression?');

let firstItem;
let increment;
let progressionLength;
let randomArray;
let replaceIndex;

const getRandomArray = () => {
  firstItem = getRandomNum();
  increment = getRandomNum();
  progressionLength = getRandomNum(5, 10);
  const array = [firstItem];
  for (let i = 1; array.length <= progressionLength; i += 1) {
    array[i] = array[i - 1] + increment;
  }
  return array;
};

const question = () => {
  randomArray = getRandomArray();
  const progression = [...randomArray];
  replaceIndex = getRandomNum(0, progressionLength);

  const randomHiddenItem = () => {
    progression.splice(replaceIndex, 1, '..');
    return progression.toString();
  };
  const addHiddenItem = randomHiddenItem();
  const processedQuestion = addHiddenItem.replaceAll(',', ' ');
  return getAnswer(`Question: ${processedQuestion} `);
};

const getCorrectAnswer = () => randomArray[replaceIndex];

export default () => gameEngine(question, getCorrectAnswer);
