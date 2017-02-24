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

  function resizeSideBar() {
    if (($(document).width()) === ($(".sidebar").width() + 30)) {
      $(".sidebar").height("100%")
    } else {
      $(".sidebar").height(($(document).height() - $(".sidebar").offset().top));
    }
  };

  window.addEventListener("load", resizeSideBar, false);
  window.addEventListener("resize", resizeSideBar, false);
  window.addEventListener("scroll", resizeSideBar, false);

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
