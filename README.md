### Hexlet tests and linter status:
[![Actions Status](https://github.com/F1nsky/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/F1nsky/frontend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/de025cc30039fcbe3955/maintainability)](https://codeclimate.com/github/F1nsky/frontend-project-lvl1/maintainability)
[![GitHub Actions Demo](https://github.com/F1nsky/frontend-project-lvl1/actions/workflows/github-actions-demo.yml/badge.svg?branch=main)](https://github.com/F1nsky/frontend-project-lvl1/actions/workflows/github-actions-demo.yml)
[![Node.js CI](https://github.com/F1nsky/frontend-project-lvl1/actions/workflows/node.js.yml/badge.svg)](https://github.com/F1nsky/frontend-project-lvl1/actions/workflows/node.js.yml)

Stage 5 game brain-even asciinema: https://asciinema.org/a/2BKoxL5IU3yybZKABK2P5h7bS

Stage 6 game brain-calc aciinema: https://asciinema.org/a/gFWKW6RFec7ckzYw5sFCT9CdQ

Stage 7 game brain-gcd aciinema: https://asciinema.org/a/QpiQ3rhfBisIuB6eXoYSOxOWV

Stage 8 game brain-progression aciinema: https://asciinema.org/a/cEcVQuYcRhXWFIxZkE9kBDn4j

Stage 9 game brain-prime aciinema: https://asciinema.org/a/K8Ueuua4lB9ErA2MlYhqmJGBw

# Game: "Parity check"
A random number is shown to the player. The user must answer yes if the number is even, or no if it is odd:
```
Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: yes
```
In case the user gives the wrong answer, it is displayed:
```
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Bill!
```
And terminates the game. In case the user has typed the correct answer, it is displayed:
```
Correct!
```
and proceeds to the next number.

The user must give the correct answer three times in a row. After a successful game is displayed:
```
Congratulations, Bill!
```
The conclusion comes as follows:
```
$ brain-even

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!
```
- Any incorrect input is considered an error (e.g., n) and is equivalent to a wrong answer.

# Game: "Calculator"
A random mathematical expression, such as 35 + 16, is shown to the player to calculate and write down the correct answer.

The conclusion should be as follows:
```
$ brain-calc

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
```
- The following operations are involved: +, - and *.
- The operations, as well as the numbers, are chosen randomly.

In case the user gives the wrong answer, it is displayed:
```
Question: 25 * 7
Your answer: 145
'145' is wrong answer ;(. Correct answer was '175'.
Let's try again, Sam!
```
And terminates the game.

# Game "GCD"
Two random numbers are shown to the player, e.g., 25 50. The user must calculate and enter the greatest common divisor of these numbers.

The output should be as follows:
```
$ brain-gcd

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!
```
In case the user gives the wrong answer, it is displayed:
```
Question: 25 50
Your answer: 1
'1' is wrong answer ;(. Correct answer was '25'.
Let's try again, Sam!
```
# Game "Arithmetic progression"
The number series that forms an arithmetic progression is shown to the player, replacing any of the numbers with two dots. The player must define this number.

The maximum length of the progression is 10 numbers. The length is randomly generated, but contains at least 5 numbers.
The position of the hidden element changes randomly each time.

Example:
```
$ brain-progression

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
```
In case the user gives the wrong answer, it is displayed:
```
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 1
'1' is wrong answer ;(. Correct answer was '15'.
Let's try again, Sam!
```
# Game "Is it a prime number?"
A random number is shown to the player. The user must answer yes if the number is prime, or no if it is complex.
```
$ brain-prime

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
```
The whole conclusion and logic in this game repeat the previous games.
