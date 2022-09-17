#!/usr/bin/env node
// шебанг с интерпретатором node
// необходим для запуска файла brain-prime.js как программы по команде brain-prime

// импортируем функцию gameCalc из файла 'games/game-prime.js'
import { gamePrime } from '../src/games/game-prime.js';

// запускаем функцию
gamePrime();
