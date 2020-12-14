const input=require('readline-sync');
const chalk=require('chalk');
console.log(chalk.bold.green("Hello there! Welcome to the FunQuizApp play"));
var name=input.question("Please tell your name:");
console.log("Welcome "+ name + " Let's start the game");

var score=0;
var high_score=0;
var temp=0;
// function to play quiz
function quizPlay(question,options,answer){
    console.log(chalk.red(question));
    var index=input.keyInSelect(options,"Choose from options");
      if(options[index]===answer){
        temp=1;
        score=score+4;
        console.log(chalk.underline.green("Your answer is correct! You get four points"));
      }
    if(temp==0){
      console.log(chalk.bgRed("Sorry! you have given the wrong ans"));
    }else{
      temp=0;
    }
}

var questions=[
  {
    question: "Which of the following option is a technology of web?",
    options:['Nodejs',"Machine Learning","IOT","Game Development"],
    answer: "Nodejs"
  },
  {
    question: "Which of the following option is a technology of data science?",
    options:['Nodejs',"Machine Learning","IOT","Game Development"],
    answer: "Machine Learning"
  },
  {
    question: "Which of the following option is a technology of web?",
    options:['Nodejs',"Machine Learning","IOT","Game Development"],
    answer: "Nodejs"
  },
  {
    question: "Which of the following option is used as a programming language?",
    options:['Nodejs',"Machine Learning","IOT","Java"],
    answer: "Java"
  },
  {
    question: "Which of the following option is a library of javascript?",
    options:['Nodejs',"Django","Flask","React"],
    answer: "React"
  },
  {
    question: "Which of the following option is a framework of javascript?",
    options:['Nodejs',"Machine Learning","Php","Laravel"],
    answer: "Nodejs"
  },
  {
    question: "Which of the following option is a framework of python?",
    options:['Nodejs',"Machine Learning","React","Django"],
    answer: "Django"
  },
  {
    question: "Which of the following option involved training of model?",
    options:['Nodejs',"Machine Learning","IOT","Game Development"],
    answer: "Machine Learning"
  },
  {
    question: "Which of the following option is a continuous integration tools?",
    options:['Jenkins',"Docker","IOT","Scrum"],
    answer: "Jenkins"
  },
  {
    question: "Which of the following cloud computing company is more famous?",
    options:['AWS',"Azure","IBM","GCP"],
    answer: "AWS"
  }
]

for(let i=0;i<questions.length;i++){
  var currQues=questions[i];
  quizPlay(currQues.question,currQues.options,currQues.answer);
  console.log("---------------------------------");
}

if(score>high_score){
  console.log(chalk.underline.green("Congratulations! You are the winner"));
  console.log(chalk.underline.yellowBright("Your score is "+score));
}