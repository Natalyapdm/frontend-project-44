import readlineSync from "readline-sync";
import greetingGame from "./cli.js";
import getRandomNum from "./utils/getRandomNum.js";

const brainGcd = () => {
  const name = greetingGame();
  console.log("Find the greatest common divisor of given numbers.");
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const num1 = getRandomNum();
    const num2 = getRandomNum();
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question("Your answer:\n");

    const getGcd = (a, b) => {
      let c;
      if (a > b) {
        while (b !== 0) {
          c = b;
          b = a % b;
          a = c;
        }
      }
      if (a < b) {
        return getGcd(b, a);
      }
      return c;
    };
    const res = getGcd(num1, num2);
    // console.log(getGcd(num1, num2));
    // console.log(res);

    if (Number(answer) === getGcd(num1, num2)) {
      rightAnsw += 1;
      console.log("Correct!");
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${getGcd(
          num1,
          num2
        )}.\nLet's try again, ${name}!`
      );
      break;
    }
  }
  if (rightAnsw === 3) {
    return console.log(`Congratulations, ${name}`);
  }
};

export default brainGcd;
