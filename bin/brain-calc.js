#!/usr/bin/env node
// шебанг с интерпретатором node
// необходим для запуска файла brain-calc.js как программы по команде brain-calc

// импортируем функцию gameCalc из файла 'games/game-calc.js'
import { gameCalc } from '../src/games/game-calc.js';

// запускаем функцию
gameCalc();
