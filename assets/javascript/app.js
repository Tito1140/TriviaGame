var startGame = $("#start-button");
var questions = $("#question");
var timeLeft = $("#timer");

$(document).ready(function () {

    $(".game-container").hide();
    $('#start-button').click(function () {
        $(".game-container").fadeIn();
        $(this).hide();
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


    var timeLeft;

    $(".game-container").on("click", run);
    var counter = 25;
    function run() {
        clearInterval(timeLeft);
        timeLeft = setInterval(decrement, 1000);
    }
    function decrement() {
        counter--;
        $("#timer").html("<h2>" + counter + "</h2>");
        if (counter === 0) {
            stop();
            $(".game-container").hide();
            console.log(correctAnswers)
        }
    }
    function stop() {

        clearInterval(timeLeft);
    }
    run();

    var correctAnswers = 0;
    var chosenAnswer = 0;

    function checkAns() {
        if (chosenAnswer === "true") {
            correctAnswers++;
            console.log(correctAnswers)
        };
    }

});
