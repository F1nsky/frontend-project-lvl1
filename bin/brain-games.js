#!/usr/bin/env node
// шебанг с интерпретатором node
// необходим для запуска файла brain-prime.js как программы по команде brain-prime

// импортируем функцию отображения вопроса и получения ответа из файла 'cli.js'
import getUserName from '../src/cli.js';

// отображаем пвводное приветствие
console.log('Welcome to the Brain Games!');

// задаем вопрос 'May I have your name?' и
// подставляем ответ в текст 'Hello,...'
console.log(`Hello, ${getUserName('May I have your name? ')}!`);
