#!/usr/bin/env node
// шебанг с интерпретатором node
// необходим для запуска файла brain-even.js как программы по команде brain-even

// импортируем функцию gameCalc из файла 'games/game-even.js'
import { gameEven } from '../src/games/game-even.js';

// запускаем функцию
gameEven();
