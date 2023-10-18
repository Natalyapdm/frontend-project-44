import readlineSync from 'readline-sync';
import greetingGame from './cli.js';
import getRandomNum from './utils/getRandomNum.js';

// const symbol = ['+', '-', '*'];
// const randomExpr = () => {
//   const num1 = getRandomNum();
//   const num2 = getRandomNum();
//   const randomSymbol = symbol[getRandomNum(symbol.length - 1)];
//   return `${num1} ${randomSymbol} ${num2}`;
// };

const calculateAnswer = (firstValue, secondValue, operator) => {
  let result = null;

  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default:
  }

  return result;
};

const brainCalc = () => {
  const name = greetingGame();
  console.log('What is the result of the expression?');

  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const symbol = ['+', '-', '*'];
    const num1 = getRandomNum();
    const num2 = getRandomNum();
    const randomSymbol = symbol[getRandomNum(symbol.length - 1)];
    const correctAnswer = calculateAnswer(num1, num2, randomSymbol);
    const expr = `${num1} ${randomSymbol} ${num2}`;
    console.log(`Question: ${expr}`);
    const answer = readlineSync.question('Your answer:\n');
    if (Number(answer) === Number(correctAnswer)) {
      rightAnsw += 1;
      console.log('Correct!');
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`,
      );
      break;
    }
  }
  if (rightAnsw === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainCalc;
