#!/usr/bin/env node
import getUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

console.log(`Hello, ${getUserName('May I have your name?')}!`);
