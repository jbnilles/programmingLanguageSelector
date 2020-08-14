$(document).ready(function (){


  $('#nextButton').click(function (){
    $('#questionCard').hide();
    let currentQuestionIndex = getcurrentQuestionIndex($('#questionCard .card-title').text());
    let nextQuestionIndex = getnextQuestionIndex($('#questionCard .card-title').text());
    writeToCard(nextQuestionIndex);
    writeToANSWERS(currentQuestionIndex);
    setRadioButton(nextQuestionIndex)
    checkIfButtonsNeeded(nextQuestionIndex);
    $('#questionCard').show();
  });

  $('#previousButton').click(function (){
    $('#questionCard').hide();
    let currentQuestionIndex = getcurrentQuestionIndex($('#questionCard .card-title').text());
    let previousQuestionIndex = getpreviousQuestionIndex($('#questionCard .card-title').text());
    writeToCard(previousQuestionIndex);
    writeToANSWERS(currentQuestionIndex);
    setRadioButton(previousQuestionIndex)
    checkIfButtonsNeeded(previousQuestionIndex);
    $('#questionCard').show();
  });

  $('#submitButton').click(function (){
    let currentQuestionIndex = getcurrentQuestionIndex($('#questionCard .card-title').text());
    writeToANSWERS(currentQuestionIndex);
    $('#questionCard').hide();
    if(checkAllQuestionsAnswered()) {
      $('#questionCard').hide();
      showResult(addAnswers()); 
    } else {
      let unanswered =  getUnansweredQuestionIndex();
      alert("Need an answer for question" + unanswered + ": " + QUESTIONS[unanswered - 1] );
      writeToCard(unanswered - 1);
      setRadioButton(unanswered - 1);
      checkIfButtonsNeeded(unanswered -1);
      $('#questionCard').show();
    }
  });

  $('#restartButton').click(function (){
    $('#cCard').hide();
    $('#jsCard').hide();
    $('#javaCard').hide();
    $('#introCard').hide();
    $('#questionCard').hide();
    resetANSWERS()
    writeToCard(0);
    $('input[type="radio"][name="questionRadio"]:checked').prop("checked", false);
    $(this).text("Restart Quiz");
    checkIfButtonsNeeded(0);
    $('#questionCard').show();
  });

});

const QUESTIONS = ["Do you prefer to work with websites?", "Do you want to avoid working with directly with machine language?", "Do you prefer to work with api's?", "Does design intrest you?", "Do you prefer to work with a live editor(console)?"];
let ANSWERS = [0, 0, 0, 0, 0];

function getnextQuestionIndex (currentQuestion) {
  let i = 0;
  for ( i = 0; i < QUESTIONS.length; i++)
  {
    if (QUESTIONS[i] === currentQuestion) {
      if (i === QUESTIONS.length - 1 ) {
        return 0;
      } else {
        return i + 1;
      }
    }
  }
  return -1;
}

function getpreviousQuestionIndex (currentQuestion) {
  let i = 0;
  for ( i = 0; i < QUESTIONS.length; i++)
  {
    if (QUESTIONS[i] === currentQuestion) {
      if (i === 0) {
        return QUESTIONS.length - 1;
      } else {
        return i - 1;
      }
    }
  }
  return -1;
}

function getcurrentQuestionIndex (currentQuestion) {
  let i = 0;
  for (i = 0; i < QUESTIONS.length; i++)
  {
    if (QUESTIONS[i] === currentQuestion) {
      return i;
    }
  }
  return -1;
}

function checkAllQuestionsAnswered () {
  let i =0;
  for (i = 0; i <ANSWERS.length; i++)
  {
    if (ANSWERS[i] === 0) {
      return false;
    }
  }
  return true;
}

function getUnansweredQuestionIndex () {
  let i =0;
  for (i = 0; i <ANSWERS.length; i++)
  {
    if (ANSWERS[i] === 0) {
      return i + 1;
    }
  }
  return -1;
}

function addAnswers () {
  let i = 0;
  let j = 0;
  for (i = 0; i < ANSWERS.length; i++)
  {
    j = j + ANSWERS[i];
  }
  return j;
}

function showResult (answersValue) {
  if (answersValue <= 10) {
    $("#cCard").show();
  } else if (answersValue > 10 && answersValue <= 19) {
    $("#javaCard").show();
  } else {
    $("#jsCard").show();
  }
  return;
}

function setRadioButton (question) {
  if (ANSWERS[question]) {
    $('#questionCard #option' + ANSWERS[question]).prop("checked", true);
  } else {
    $('input[type="radio"][name="questionRadio"]:checked').prop("checked", false);
  }
  return;
}

function writeToANSWERS (currentQuestionIndex) { //should have read answers function 
  if (!isNaN(parseInt($('input[type="radio"][name="questionRadio"]:checked').val()))) {
    ANSWERS[currentQuestionIndex ] = parseInt($('input[type="radio"][name="questionRadio"]:checked').val());
  }
  return;
}

function checkIfButtonsNeeded (question) {
  if (question === 0) {
    $("#previousButton").hide();
    $("#nextButton").show();
  } else if(question === 4) {
    $("#previousButton").show();
    $("#nextButton").hide();
  } else {
    $("#previousButton").show();
    $("#nextButton").show();
  }
  return;
  }

  function writeToCard (questionIndex) {
    $('#questionCard .card-title').text(QUESTIONS[questionIndex]);
    $('#questionCard .card-header').text("Question " + (questionIndex + 1));
    return;
  }

  function resetANSWERS () {
    ANSWERS = [0, 0, 0, 0, 0];
    return;
  }

