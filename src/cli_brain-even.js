#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetingGame from '../src/cli.js';

const checkEvenNum = (num) => {
  return num % 2 === 0 ? 'yes' : 'no';
}

const getRandomNum = () => {
  return Math.round(Math.random() * 100);
}
const brainEven = () => {
  const name = greetingGame();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i ++) {
    const num = getRandomNum();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer:\n');
    const correctAnswer = checkEvenNum(num);
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default brainEven;