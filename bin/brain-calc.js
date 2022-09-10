#!/usr/bin/env node

import getAnswer from '../src/cli.js';
import game from '../src/games/game-calc.js';

console.log('Welcome to the Brain Games!');

const userName = getAnswer('May I have your name? ');

console.log(`Hello, ${userName}!`); // задаем вопрос 'May I have your name?' и  подставляем ответ пользователя в текст 'Hello, {имя пользователя}!'

console.log('What is the result of the expression?');

game(userName);
