function hideIntrucstion(event) {
  var instructions = document.getElementById("instructions");
  var plusIcon = document.getElementById("plusIcon");
  var test = document.getElementById("test");
  if (event.code === "Space") {
    instructions.style.display = "none";
    plusIcon.style.display = "flex";
    var randomValue = (Math.floor(Math.random() * 5) + 1) * 1000;
    console.log(randomValue);
    setTimeout(() => {  
      plusIcon.style.display = "none";
      test.style.display = "flex";
      userTesting(40);
    }, randomValue);
  }
}

function userTesting(totalQuestion) {
  var totalCorrect = 0;
  var random = Math.floor(Math.random() * 4) + 1;
  // var image = document.querySelector("img");
  document.getElementById("testImage").src = random + ".png";
  var time1 = Date.now();
  var counter = 1;
  console.log("No, Icon, Text, UserInput, ReactionTime(ms), T/F");
  document.addEventListener("keydown", function (event) {
    var time2 = Date.now();
    var reactionTime = time2 - time1;
    if (random == 1 && event.code === "ArrowUp") {
      if (counter <= totalQuestion) {
        console.log(counter + ", " + "UP, UP, UP, " + reactionTime + ", T");
        totalCorrect++;
      }
    } else if (random == 2 && event.code === "ArrowUp") {
      if (counter <= totalQuestion) {
        console.log(counter + ", " + "UP, DOWN, UP, " + reactionTime + ", T");
        totalCorrect++;
      }
    } else if (random == 3 && event.code === "ArrowDown") {
      if (counter <= totalQuestion) {
        console.log(counter + ", " + "DOWN, DOWN, DOWN, " + reactionTime + ", T");
        totalCorrect++;
      }
    } else if (random == 4 && event.code === "ArrowDown") {
      if (counter <= totalQuestion) {
        console.log(counter + ", " + "DOWN, UP, DOWN, " + reactionTime + ", T");
        totalCorrect++;
      }
    } else if (random == 1 && event.code === "ArrowDown") {
      if (counter <= totalQuestion) {
        console.log(counter + ", " + "UP, UP, DOWN, " + reactionTime + ", F");
      }
    } else if (random == 2 && event.code === "ArrowDown, ") {
      if (counter <= totalQuestion) {
        console.log(counter + ", " + "UP, DOWN, DOWN, " + reactionTime + ", F");
      }
    } else if (random == 3 && event.code === "ArrowUp") {
      if (counter <= totalQuestion) {
        console.log(counter + ", " + "DOWN, DOWN, UP, " + reactionTime + ", F");
      }
    } else if (random == 4 && event.code === "ArrowUp") {
      if (counter <= totalQuestion) {
        console.log(counter + ", " + "DOWN, UP, UP, " + reactionTime + ", F");
      }
    }

    if (counter < totalQuestion) {
      counter++;
      var newRandom;
      do {
        newRandom = Math.floor(Math.random() * 4) + 1;
      } while (newRandom === random);
      random = newRandom;
      document.getElementById("testImage").src = random + ".png";
      time1 = Date.now();
    } else {
      counter = 0;
      test.style.display = "none";
      var message = "Your total correct answer: " + totalCorrect;
      document.body.innerHTML="<div id=\"result\" style=\"display: flex\">" + message + "</div>";
      document.getElementById("result").style.display = "flex";
      document.getElementById("result").innerHTML = "Your total correct answer: " + totalCorrect;
  
    }
  });
}
document.addEventListener("keydown", hideIntrucstion);