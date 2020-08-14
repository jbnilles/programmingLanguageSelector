$(document).ready(function(){

$('#nextButton').click(function(){
//this.parentNode.parentNode.css('background','yellow'));
//$('#questionCard').css('background','yellow');
$('#questionCard .card-header').text(getNextQuestion($('#questionCard .card-header').text()));


});
$('#previousButton').click(function(){
  //alert($('#questionCard .card-header').text());
  $('#questionCard .card-header').text(getPreviousQuestion($('#questionCard .card-header').text()));
  
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
      else
      {
        nextQuestion = questions[i-1];
      }
      
    }
  }
  return nextQuestion;
}