import readlineSync from 'readline-sync';

const greetingGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
  return name;
};

export default greetingGame;