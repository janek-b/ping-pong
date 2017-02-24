// Back-End
function pingPong(number) {
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    if (divisibleByThree(i)) {
      numberArray.push("ping")
    } else {
      numberArray.push(i);
    };
  };
  return numberArray;
};

function divisibleByThree(number) {
  if ((number % 3) === 0) {
    return true;
  } else {
    return false;
  }
}

// Front-End
$(function() {
  $("#pingPongForm").submit(function() {
    event.preventDefault();

    var userInput = parseInt($("#inputNumber").val());
    var result = pingPong(userInput);

    $(".output").text(result);
  });
});
