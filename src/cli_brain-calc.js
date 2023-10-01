

import readlineSync from 'readline-sync';
import greetingGame from '../src/cli.js';
import getRandomNum from '../src/utils/getRandomNum.js';

const symbol = ['+', '-', '*'];
const randomExpr = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const randomSymbol = symbol[getRandomNum(symbol.length - 1)];
  return `${num1} ${randomSymbol} ${num2}`;
};

const brainCalc = () => {
  const name = greetingGame();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i++) {
    const expr = randomExpr();
    const correctAnswer = eval(expr);
    console.log(`Question: ${expr}`);
    const answer = +readlineSync.question('Your answer:\n');
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};


export default brainCalc;