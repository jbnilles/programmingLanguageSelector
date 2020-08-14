$(document).ready(function(){

$('#nextButton').click(function(){
  $('#questionCard').hide();
let currentQuestion = getCurrentQuestion($('#questionCard .card-header').text());
let nextQuestion = getNextQuestion($('#questionCard .card-header').text());
$('#questionCard .card-header').text(QUESTIONS[nextQuestion]);
if(!isNaN(parseInt($('input[type="radio"][name="questionRadio"]:checked').val()))){
  ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
  
}
  //ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
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
  
  if(!isNaN(parseInt($('input[type="radio"][name="questionRadio"]:checked').val()))){
    ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
    
  }//ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
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
  //$('#questionCard .card-header').text(QUESTIONS[getPreviousQuestion($('#questionCard .card-header').text())]);
  
  let currentQuestion = getCurrentQuestion($('#questionCard .card-header').text());
  //alert(parseInt($('input[type="radio"][name="questionRadio"]:checked').val()));
  if(!isNaN(parseInt($('input[type="radio"][name="questionRadio"]:checked').val()))){
    ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
    
  }
  //alert(ANSWERS);
  if(checkAllQuestionsAnswered())
  {
    $('#questionCard').hide();
    decideResult(addAnswers()); 
  }
  else
  {
   let unanswered =  getUnansweredQuestion();
   alert("Question: " + unanswered + " needs to be answered.")
   //$('#questionCard .card-header').text(QUESTIONS[getPreviousQuestion($('#questionCard .card-header').text())]);
  }
  });
  $('#restartButton').click(function(){
    $('#cCard').hide();
    $('#jsCard').hide();
    $('#javaCard').hide();
    ANSWERS = [0,0,0,0,0];
    $('#questionCard .card-header').text(QUESTIONS[0]);
    $('input[type="radio"][name="questionRadio"]:checked').prop("checked",false);
    $('#questionCard').fadeIn();
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

function checkAllQuestionsAnswered() {
  let i =0;
  for(i = 0; i <ANSWERS.length; i++)
  {
    //alert("checkallanswered");
    if (ANSWERS[i] === 0)
    {
      return false;
    }
    
    
    
  }
  return true;
}
function getUnansweredQuestion() {
  let i =0;
  for(i = 0; i <ANSWERS.length; i++)
  {
    if (ANSWERS[i] === 0)
    {
      return i + 1;
    }
    
  }
  return -1;
}

function addAnswers() {
  let i = 0;
  let j = 0;
  //alert(ANSWERS.length + "answerlength");
  for (i = 0; i < ANSWERS.length; i++)
  {
    j = j + ANSWERS[i];
  }
  return j;
}
function decideResult(answersValue) {
  //alert(answersValue);
  if(answersValue <= 8)
  {
    $("#cCard").show();
    //alert("option1");
  }
  else if(answersValue > 8 && answersValue <= 16)
  {
    $("#javaCard").show();
    //alert("option2");
  }
  else
  {
    $("#jsCard").show();
    //alert("option3");
  }
}

