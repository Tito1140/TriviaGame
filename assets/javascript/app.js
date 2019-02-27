var startGame = $("#start-button");
var questionsList = $(".questions");
var questions = $("#question");
var timeLeft = $("#timer");

$(document).ready(function () {

    $(".game-container").hide();
    $('#disappear').click(function () {
        $(".game-container").fadeIn();
        $(this).hide();
    });
});

$('.answer1').click(function () {
    $('.answer1').not(this).prop('checked', false);
});
$('.answer2').click(function () {
    $('.answer2').not(this).prop('checked', false);
});
$('.answer3').click(function () {
    $('.answer3').not(this).prop('checked', false);
});
$('.answer4').click(function () {
    $('.answer4').not(this).prop('checked', false);
});
$('.answer5').click(function () {
    $('.answer5').not(this).prop('checked', false);
});