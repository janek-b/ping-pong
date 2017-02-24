// Back-End
function pingPong(number) {
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    if (divisibleByThree(i) && divisibleByFive(i)) {
      numberArray.push("ping-pong")
    } else if (divisibleByThree(i)) {
      numberArray.push("ping");
    } else if (divisibleByFive(i)) {
      numberArray.push("pong");
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
  };
};

function divisibleByFive(number) {
  if ((number % 5) === 0) {
    return true;
  } else {
    return false;
  };
};

// Front-End
$(function() {

  function resizeAbout() {
    if (($(document).width()) === ($(".about").width() + 30)) {
      $(".about").height("100%")
    } else {
      $(".about").height(($(document).height() - $(".about").offset().top));
    }
  };

  window.addEventListener("load", resizeAbout, false);
  window.addEventListener("resize", resizeAbout, false);
  window.addEventListener("scroll", resizeAbout, false);

  $("#pingPongForm").submit(function() {
    event.preventDefault();
    console.log($(window).height());
    console.log($(document).height());

    var userInput = parseInt($("#inputNumber").val());
    var results = pingPong(userInput);
    $(".output").empty();

    results.forEach(function(result) {
      $(".output").append("<li>"+result+"</li>");
    });
  });
});
