// Back-End
function pingPong(number) {
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    numberArray.push(i);
  }

  return numberArray;
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
