$(document).ready(function(){

$('#nextButton').click(function(){
  $('#questionCard').hide();
  let currentQuestion = getCurrentQuestion($('#questionCard .card-title').text());
  let nextQuestion = getNextQuestion($('#questionCard .card-title').text());
  
  $('#questionCard .card-title').text(QUESTIONS[nextQuestion]);
  $('#questionCard .card-header').text("Question " + (nextQuestion + 1));
  writeToANSWERS(currentQuestion);
  // if(!isNaN(parseInt($('input[type="radio"][name="questionRadio"]:checked').val()))){
  //   ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
  
  // }
  setRadioButton(nextQuestion)
  //ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
  //$('#questionCard #option'+ ANSWERS[nextQuestion]).prop("checked",true);
  // if(ANSWERS[nextQuestion])
  // {
  //   $('#questionCard #option'+ ANSWERS[nextQuestion]).prop("checked",true);

  // }
  // else
  // {
  //   $('input[type="radio"][name="questionRadio"]:checked').prop("checked",false);

  // }


  $('#questionCard').show();
});


$('#previousButton').click(function(){
  $('#questionCard').hide();
  let currentQuestion = getCurrentQuestion($('#questionCard .card-title').text());
  let previousQuestion = getPreviousQuestion($('#questionCard .card-title').text());
  $('#questionCard .card-title').text(QUESTIONS[previousQuestion]);
  $('#questionCard .card-header').text("Question " + (previousQuestion + 1));
  writeToANSWERS(currentQuestion);
  // if(!isNaN(parseInt($('input[type="radio"][name="questionRadio"]:checked').val()))){
  //   ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
    
  // }//ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
  setRadioButton(previousQuestion)
  // if(ANSWERS[previousQuestion])
  // {
  //   $('#questionCard #option'+ ANSWERS[previousQuestion]).prop("checked",true);

  // }
  // else
  // {
    
  //   $('input[type="radio"][name="questionRadio"]:checked').prop("checked",false);

  // }
  $('#questionCard').show();
  });



$('#submitButton').click(function(){
  //$('#questionCard .card-title').text(QUESTIONS[getPreviousQuestion($('#questionCard .card-title').text())]);
  
  let currentQuestion = getCurrentQuestion($('#questionCard .card-title').text());
  //alert(parseInt($('input[type="radio"][name="questionRadio"]:checked').val()));
  // 
  writeToANSWERS(currentQuestion);
  //alert(ANSWERS);
  if(checkAllQuestionsAnswered())
  {
    $('#questionCard').hide();
    decideResult(addAnswers()); 
  }
  else
  {
   let unanswered =  getUnansweredQuestion();
   alert("Need an answer for question"+ unanswered+": "+  QUESTIONS[unanswered - 1] );
   $('#questionCard .card-title').text(QUESTIONS[unanswered - 1]);
   $('#questionCard .card-header').text("Question " + (unanswered));
   setRadioButton(unanswered - 1);
   //$('#questionCard .card-title').text(QUESTIONS[getPreviousQuestion($('#questionCard .card-title').text())]);
  }
  });
  $('#restartButton').click(function(){
    $('#cCard').hide();
    $('#jsCard').hide();
    $('#javaCard').hide();
    ANSWERS = [0,0,0,0,0];
    $('#questionCard .card-title').text(QUESTIONS[0]);
    $('#questionCard .card-header').text("Question 1");
    $('input[type="radio"][name="questionRadio"]:checked').prop("checked",false);
    $(this).text("Restart Quiz");
    $('#questionCard').show();
  });
  

});

const QUESTIONS = ["Do you prefer to work with websites?","Do you want to avoid working with directly with machine language?","Do you prefer to work with api's?","Does design intrest you?","Do you prefer to work with a live editor(console)?"];
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
function setRadioButton(question) {
  if(ANSWERS[question])
  {
    $('#questionCard #option'+ ANSWERS[question]).prop("checked",true);

  }
  else
  {
    $('input[type="radio"][name="questionRadio"]:checked').prop("checked",false);

  }
}
function writeToANSWERS(currentQuestion) {
  if(!isNaN(parseInt($('input[type="radio"][name="questionRadio"]:checked').val()))){
    ANSWERS[currentQuestion ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
    
  }
}

