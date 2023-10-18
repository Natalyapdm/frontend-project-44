import readlineSync from "readline-sync";
import greetingGame from "./cli.js";

const getRndInteger = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

const brainProg = () => {
  const name = greetingGame();
  console.log("What number is missing in the progression?");
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const getProgression = (start, step, length) => {
      const progression = [];

      for (let i = 0; i < length; i += 1) {
        progression.push(start + i * step);
      }

      return progression;
    };
    const start = getRndInteger(0, 5);
    const step = getRndInteger(2, 3);
    const length = getRndInteger(10, 15);
    const progression = getProgression(start, step, length);
    const hiddenNumber = getRndInteger(0, progression.length - 1);
    const correctAnswer = progression[hiddenNumber].toString();
    progression[hiddenNumber] = "..";
    const res = progression.join(" ");

    console.log(`Question: ${res}`);
    const answer = readlineSync.question("Your answer:\n");
    if (answer === correctAnswer) {
      rightAnsw += 1;
      console.log("Correct!");
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`
      );
      break;
    }
    if (rightAnsw === 3) {
      return console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainProg;
