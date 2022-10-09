var userAnswer = [];
var scoreTally = 0;
var c = 0;
var answerSequence = [];
var pictureSequence = [];
var rounds = 10;

$("#startButton").click(function() {
  unhideButtons();
  var randChild = [];
  var randChildPic = [];
  for (var i = 0; i < rounds; i++) {
    var randChildNumber = Math.floor((Math.random() * 3) + 1);
    var randPicNumber = Math.floor((Math.random() * 33) + 1);
    if (randChildNumber === 1) {
      randChild[i] = "noah";
      randChildPic[i] = "N" + randPicNumber;
    } else if (randChildNumber === 2) {
      randChild[i] = "louis";
      randChildPic[i] = "L" + randPicNumber;
    } else {
      randChild[i] = "lucas";
      randChildPic[i] = "C" + randPicNumber;
    };
    answerSequence = randChild;
    pictureSequence = randChildPic;
    console.log(answerSequence);
    console.log(pictureSequence);
    setTimeout(function() {
      $(".imgBox").attr("src", "photos/" + pictureSequence[0] + ".jpg").fadeIn(500);
    }, 700);
  }
})
// Q1

$(".gameButton").click(event, function() {

  var userChoice = this.id;
  userAnswer.push(userChoice);
  console.log(userAnswer);
  if (userAnswer[c] === answerSequence[c]) {
    $(".answerBox").addClass("correct");
    $("#answerLog").text("Correct!");
    $("#" + answerSequence[c]).addClass("correctButton");
    var rightSound = new Audio("sounds/right.mp3");
    rightSound.play();
    scoreTally++;
  } else {
    $("#answerLog").text("Incorrect!");
    $(".answerBox").addClass("incorrect");
    $("#" + answerSequence[c]).addClass("correctButton");
    $("#" + userAnswer[c]).addClass("incorrectButton");
    var wrongSound = new Audio("sounds/wrong.mp3");
    wrongSound.play();
  }
  setTimeout(function() {
    $("#answerLog").text("");
    $(".answerBox").removeClass("incorrect");
    $(".answerBox").removeClass("correct");
    $("#" + answerSequence[c - 1]).removeClass("correctButton");
    $("#" + userAnswer[c - 1]).removeClass("incorrectButton");
  }, 1500);
  c++;
  if (c === rounds) {
    finishGame();
  } else {
    setTimeout(function() {
      $(".imgBox").attr("src", "photos/" + pictureSequence[c] + ".jpg").fadeIn(500);
    }, 500);
  }
});

function finishGame() {
  $(".imgBox").fadeOut(2000);
  $("#noah").fadeOut(500);
  $("#louis").fadeOut(500);
  $("#lucas").fadeOut(500);
  console.log(scoreTally);
  setTimeout(function() {
    $(".postGame2").text(scoreTally);
    $(".postGame3").text("out of " + rounds + "!");
    $(".postGame1").fadeIn(1000);
    $(".postGame2").fadeIn(2000);
    $(".postGame3").fadeIn(3000);
    $("#resetButton").fadeIn(3000);
  }, 2200);


}


function unhideButtons() {
  $("#startButton").fadeOut(500);
  setTimeout(function() {
    $("#noah").fadeIn(500);
    $("#louis").fadeIn(500);
    $("#lucas").fadeIn(500);
  }, 700)
}

$("#resetButton").click(event, function() {
  location.reload();
})
