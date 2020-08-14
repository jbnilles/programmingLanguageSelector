$(document).ready(function(){

$('#nextButton').click(function(){
//this.parentNode.parentNode.css('background','yellow'));
//$('#questionCard').css('background','yellow');
let currentQuestion = getCurrentQuestion($('#questionCard .card-header').text());
let nextQuestion = getNextQuestion($('#questionCard .card-header').text());
//$('#questionCard .card-header').text(QUESTIONS[getNextQuestion($('#questionCard .card-header').text())]);
$('#questionCard .card-header').text(QUESTIONS[nextQuestion]);
  ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
alert(ANSWERS);

});
$('#previousButton').click(function(){
  //alert($('#questionCard .card-header').text());
  let currentQuestion = getCurrentQuestion($('#questionCard .card-header').text());
  let previousQuestion = getPreviousQuestion($('#questionCard .card-header').text());
  //alert(question);
  $('#questionCard .card-header').text(QUESTIONS[previousQuestion]);
  ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
  alert(ANSWERS);
  });



$('#submitButton').click(function(){
  //alert($('#questionCard .card-header').text());
  $('#questionCard .card-header').text(QUESTIONS[getPreviousQuestion($('#questionCard .card-header').text())]);
  
  });


});

const QUESTIONS = ["question1","question2","question3","question4","question5"];
let ANSWERS =[0,0,0,0,0];

function getNextQuestion(currentQuestion) {
  let i = 0;
  for( i = 0; i < QUESTIONS.length;i++)
  {
    if(QUESTIONS[i] === currentQuestion)
    {
      if(i === QUESTIONS.length - 1 )
      {
        return 0;
      }
      else
      {
        return i+1;
      }
      
    }
  }
  return nextQuestion;
}
function getPreviousQuestion(currentQuestion) {
  let i = 0;
  for( i = 0; i < QUESTIONS.length;i++)
  {
    if(QUESTIONS[i] === currentQuestion)
    {
      if(i === 0)
      {
        return QUESTIONS.length - 1;
      }
      else
      {
        return i-1;
      }
      
    }
  }
  return nextQuestion;
}
function getCurrentQuestion(currentQuestion) {
  let i = 0;
  for( i = 0; i < QUESTIONS.length;i++)
  {
    if(QUESTIONS[i] === currentQuestion)
    {
      return i;
      
    }
  }
  return -1;
}