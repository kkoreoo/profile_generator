const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileGenerator = () => {
  rl.question("What's your name? ", (answer1) => {
    rl.question('What kind of hobbies do you do? ', (answer2) => {
      rl.question('What is your favourite meal? ', (answer3) => {
        rl.question('What was your dream job as a kid? ', (answer4) => {
          rl.question('Did you have any pets growing up? ', (answer5) => {
            
            console.log(`${answer1} ${answer2} ${answer3} ${answer4} ${answer5}`);
  
            rl.close();
          });
        });
      });
    });
  });
};

profileGenerator();