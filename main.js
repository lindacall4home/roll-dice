$(document).ready(function() {

  function rollDice(){
    $('#dice-container1').addClass('roll1')
    $('#die1').addClass('spin')
    $('#dice-container2').addClass('roll2')
    $('#die2').addClass('spin')
  }

  $('.wrapper').click(() => rollDice())

  $('.dice-container').on("animationend", e => {
    $('#dice-container1').removeClass('roll1');
    $('#die1').removeClass('spin');
    $('#dice-container2').removeClass('roll2');
    $('#die2').removeClass('spin');
  });            

  $('body').snowfall({image :"bower_components/jquery-snowfall/examples/images/flake.png", minSize: 10, maxSize:32});

});
