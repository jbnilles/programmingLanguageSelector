$(document).ready(function(){

$('#nextButton').click(function(){
//this.parentNode.parentNode.css('background','yellow'));
$('.card').css('background','yellow');
alert(getNextQuestion('question5'));

});
$('#previousButton').click(function(){
  $('.card').css('background','blue');
  alert(getPreviousQuestion('question1'));
  });


});

const questions = ["question1","question2","question3","question4","question5"];


function getNextQuestion(currentQuestion) {
  let i = 0;
  let nextQuestion ="";
  for( i = 0; i < questions.length;i++)
  {
    if(questions[i] === currentQuestion)
    {
      if(i === questions.length - 1 )
      {
        nextQuestion = questions[0];
      }
      else
      {
        nextQuestion = questions[i+1];
      }
      
    }
  }
  return nextQuestion;
}
function getPreviousQuestion(currentQuestion) {
  let i = 0;
  let previousQuestion ="";
  for( i = 0; i < questions.length;i++)
  {
    if(questions[i] === currentQuestion)
    {
      if(i === 0)
      {
        nextQuestion = questions[questions.length - 1];
      }
      
    }
  }
  return nextQuestion;
}