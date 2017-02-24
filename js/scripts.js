// Back-End
function pingPong(number) {

  return number;
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
