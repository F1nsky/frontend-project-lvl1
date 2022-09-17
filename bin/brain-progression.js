#!/usr/bin/env node
// шебанг с интерпретатором node
// необходим для запуска файла brain-progression.js как программы по команде brain-progression

// импортируем функцию gameCalc из файла 'games/game-progression.js'
import { gameProgression } from '../src/games/game-progression.js';

// запускаем функцию
gameProgression();
