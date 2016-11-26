// Part 1
$("#btn1").click(function() {
    $("#part1").toggle(500);
});

// Part 2
$("#btn2").click(function() {
  $("#part2").css("background-color", "blue");
});

// Part 3
$("#btn3").click(function() {
  $("#part3").addClass("shadow");
});

// Part 4
$("#btn4").click(function() {
  $("#quote").html("I've been altered!")
});

// Part 5
var Kelly = "No this is a message"

$("#btn5").click(function() {
  $("#part5").val(Kelly);
  alert(Kelly)
});