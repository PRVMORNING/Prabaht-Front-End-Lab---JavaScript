

function Quiz(questions)
{
    this.Score=0;
    this.questions=questions;
    this.questionIndex=0;

}

function Question(questionText,choices,answer)
{
    this.questionText=questionText;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.isCorrectAnswer=function(userAnswer)
{
    return this.answer===userAnswer;
}

Quiz.prototype.isEnded=function()
{
    return this.questionIndex===this.questions.length;

}

Quiz.prototype.getQuestionByIndex=function()
{
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function(answer)
{
    if(this.getQuestionByIndex().isCorrectAnswer(answer))
    {
        this.Score++;
       
    }

    this.questionIndex++;
}

function loadQuestions()
{
    if(quiz.isEnded())
    {
    showScores();
    }

    else
    {
     var element=document.getElementById("question");
     element.innerHTML=quiz.getQuestionByIndex().questionText;

     var choices=quiz.getQuestionByIndex().choices;
     for(var i=0;i<choices.length;i++)
    {
     var element=document.getElementById("choice"+i);
     element.innerHTML=choices[i];
     handleOptionButton("btn"+i,choices[i]);
    }
     showProgress();
   }
}; 


function handleOptionButton(id,choice)
{
    var button=document.getElementById(id);
    button.onclick=function()
    {
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }
};

function showScores()
{
var gameOverHTML= "<h1>Result</h1>";
gameOverHTML=  "<h2>Your scores: "+ quiz.Score + ".And mark percentage is:"+ (quiz.Score*100)/(quiz.questions.length)+"%";
var element=document.getElementById("quiz");
element.innerHTML=gameOverHTML;
};

function showProgress()
{
  var currentQuestionNumber=quiz.questionIndex+1;
  var element=document.getElementById("progress");
  element.innerHTML="Question"+currentQuestionNumber+"of "+quiz.questions.length;
};

let questions = [ new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"), 
new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"), 
new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"), 
new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"), 
new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language") ]; 

let quiz = new Quiz(questions);

loadQuestions();
