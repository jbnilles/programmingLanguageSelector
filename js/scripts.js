$(document).ready(function(){

$('#nextButton').click(function(){
  $('#questionCard').hide();
let currentQuestion = getCurrentQuestion($('#questionCard .card-header').text());
let nextQuestion = getNextQuestion($('#questionCard .card-header').text());
$('#questionCard .card-header').text(QUESTIONS[nextQuestion]);
  ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
  $('#questionCard #option'+ ANSWERS[nextQuestion]).prop("checked",true);
  if(ANSWERS[nextQuestion])
  {
    $('#questionCard #option'+ ANSWERS[nextQuestion]).prop("checked",true);

  }
  else
  {
    $('input[type="radio"][name="questionRadio"]:checked').prop("checked",false);

  }


  $('#questionCard').fadeIn();
});


$('#previousButton').click(function(){
  $('#questionCard').hide();
  let currentQuestion = getCurrentQuestion($('#questionCard .card-header').text());
  let previousQuestion = getPreviousQuestion($('#questionCard .card-header').text());
  $('#questionCard .card-header').text(QUESTIONS[previousQuestion]);
  ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
  if(ANSWERS[previousQuestion])
  {
    $('#questionCard #option'+ ANSWERS[previousQuestion]).prop("checked",true);

  }
  else
  {
    $('input[type="radio"][name="questionRadio"]:checked').prop("checked",false);

  }
  $('#questionCard').fadeIn();
  });



$('#submitButton').click(function(){
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
