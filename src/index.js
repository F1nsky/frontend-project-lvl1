// импортируем функцию отображения вопроса и получения ответа из файла 'cli.js'
import getAnswer from './cli.js';
// импортируем функцию получения случайного числа из файла 'getRandomNum.js'
import getRandomNum from './getRandomNum.js';
// ипортируем функцию получения случайного мат.оператора из файла 'getRandomOperator.js'
import getRandomOperator from './getRandomOperator.js';
// импортируем функцию получения случайного массива из файла 'getRandomArray.js'
import getRandomArray from './getRandomArray.js';

// экспортируем логику игры с входными параметрами "rulesDescription" и "getCorrectAnswer"
export default (rulesDescription, getCorrectAnswer) => {
  // отображаем вводное приветствие
  console.log('Welcome to the Brain Games!');

  // задаем вопрос 'May I have your name?'
  const userName = getAnswer('May I have your name? ');
  // и подставляем ответ пользователя в текст 'Hello, {имя пользователя}!'
  console.log(`Hello, ${userName}!`);

  // отображаем правила игры
  console.log(rulesDescription);

  let winCount = 0;

  // определяем какую логику использовать для игры:
  // логика для игры "Greatest common divisor"
  if (rulesDescription === 'Find the greatest common divisor of given numbers.') {
    // объявляем цикл, который отображает вопрос, проверяет ответ и отображает результат
    for (; winCount < 3; winCount += 1) {
      // объявляем константы случайных чисел
      const randomNum1 = getRandomNum();
      const randomNum2 = getRandomNum();
      // объявляем корректный ответ
      const correctAnswer = getCorrectAnswer(randomNum1, randomNum2);
      // задаем вопрос 'Question:' и подставлем ответ в текст 'Your answer: {ответ пользователя}'
      const question = getAnswer(`Question: ${randomNum1} ${randomNum2} `);
      console.log(`Your answer: ${question}`);

      const userAnswer = question;

      // проверяем корректный ли ответ пользователя или нет
      // в зависимости от результата проверки отображаем подготовленный текст
      if (userAnswer === correctAnswer.toString()) {
        // отображаем 'Correct!' если ответ пользователя правильный
        console.log('Correct!');
      } else {
        // отображаем ''${userAnswer}' is wrong answer ;(..' если ответ пользователя неправильный
        console.log(` '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
        break;
      }
    }

    // отображаем позравление с победой, если число правильных ответов равна трём
    if (winCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }

  // логика для игры "Calculator"
  } else if (rulesDescription === 'What is the result of the expression?') {
    for (; winCount < 3; winCount += 1) {
      // объявляем константы случайных чисел
      const randomNum1 = getRandomNum();
      const randomNum2 = getRandomNum();
      // объявляем константу случайного оператора
      const randomOperator = getRandomOperator();
      // объявляем корректный ответ
      const correctAnswer = getCorrectAnswer(randomNum1, randomNum2, randomOperator);

      // задаем вопрос 'Question:' и подставлем ответ в текст 'Your answer: {ответ пользователя}'
      const question = getAnswer(`Question: ${randomNum1} ${randomOperator} ${randomNum2} `);
      console.log(`Your answer: ${question}`);

      const userAnswer = question;

      if (userAnswer === correctAnswer.toString()) {
        // отображаем 'Correct!' если ответ пользователя правильный
        console.log('Correct!');
      } else {
        // отображаем ''${userAnswer}' is wrong answer ;(..' если ответ пользователя неправильный
        console.log(` '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
        break;
      }
    }

    // отображаем позравление с победой, если число правильных ответов равна трём
    if (winCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }

  // логика для игры "Progression"
  } else if (rulesDescription === 'What number is missing in the progression?') {
    for (; winCount < 3; winCount += 1) {
      // объявляем константы случайных первого элемента массива и шага между значениями массива
      const firstItem = getRandomNum();
      const increment = getRandomNum();
      // объявляем константу случайной длины массива
      const progressionLength = getRandomNum(5, 10);
      // объявляем константу случайного индекса для замены элемента массива
      const replaceIndex = getRandomNum(0, progressionLength);
      // создаем массив
      const array = getRandomArray(firstItem, increment, progressionLength);
      // объявляем корректный ответ
      const correctAnswer = getCorrectAnswer(array, replaceIndex);

      // объявляем константу производящую подмену случайного элемента массива
      // и перевод массива в текст/строку (string)
      const randomHiddenItem = () => {
        array.splice(replaceIndex, 1, '..');
        return array.toString();
      };

      // удаляем случайный элемента массива и переводим массив в текст
      const addHiddenItem = randomHiddenItem();
      // подменяем в тексте (бывшем массиве) все запятые на пробелы
      const questionPrep = addHiddenItem.replaceAll(',', ' ');

      // задаем вопрос 'Question:' и подставлем ответ в текст 'Your answer: {ответ пользователя}'
      const question = getAnswer(`Question: ${questionPrep} `);
      console.log(`Your answer: ${question}`);

      const userAnswer = question;

      // проверяем корректный ли ответ пользователя или нет
      // в зависимости от результата проверки отображаем подготовленный текст
      if (userAnswer === correctAnswer.toString()) {
        // отображаем 'Correct!' если ответ пользователя правильный
        console.log('Correct!');
      } else {
        // отображаем ''${userAnswer}' is wrong answer ;(..' если ответ пользователя неправильный
        console.log(` '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
        break;
      }
    }

    // отображаем позравление с победой, если число правильных ответов равна трём
    if (winCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }

  // логика для остальных игр ("Even", "Prime")
  } else {
    for (; winCount < 3; winCount += 1) {
      // объявляем константу случайного числа
      const randomNum = getRandomNum();
      // объявляем корректный ответ
      const correctAnswer = getCorrectAnswer(randomNum);

      // задаем вопрос 'Question:' и подставлем ответ в текст 'Your answer: {ответ пользователя}'
      const userAnswer = getAnswer(`Question: ${randomNum} `);
      console.log(`Your answer: ${userAnswer}`);

      // проверяем корректный ли ответ пользователя или нет
      // в зависимости от результата проверки отображаем подготовленный текст
      if (userAnswer === correctAnswer.toString()) {
        // отображаем 'Correct!' если ответ пользователя правильный
        console.log('Correct!');
      } else {
        // отображаем ''${userAnswer}' is wrong answer ;(..' если ответ пользователя неправильный
        console.log(` '${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
        break;
      }
    }

    // отображаем позравление с победой, если число правильных ответов равна трём
    if (winCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
