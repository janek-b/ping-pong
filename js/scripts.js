// Back-End
function pingPong(number) {
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    if (i === 2) {
      numberArray.push("two")
    } else {
      numberArray.push(i);
    };
  };

  return numberArray;
};

// Front-End
$(function() {
  $("#pingPongForm").submit(function() {
    event.preventDefault();

    var userInput = parseInt($("#inputNumber").val());
    var result = pingPong(userInput);

    $(".output").text(result);
  });
});
