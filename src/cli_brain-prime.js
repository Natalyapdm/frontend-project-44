import readlineSync from 'readline-sync';
import greetingGame from './cli.js';
import getRandomNum from './utils/getRandomNum.js';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const brainPrime = () => {
  const name = greetingGame();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const num = getRandomNum();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer:\n');
    const correctAnswer = isPrime(num) ? 'yes' : 'no';

    if (answer === correctAnswer) {
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
      return console.log(`Congratulations, ${name}!`);
    }
};

export default brainPrime;
