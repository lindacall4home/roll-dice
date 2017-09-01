$(document).ready(function() {

  function rollDice(){
    $('#dice-container').addClass('roll')
    $('.die').addClass('spin')
  }

  $('.wrapper').click(() => rollDice())
  $('#dice-container').on("animationend", e => {
    $('#dice-container').removeClass('roll');
  });
  $('.die').on("animationend", e => {
    $('.die').removeClass('spin');
  });


  $('body').snowfall({image :"bower_components/jquery-snowfall/examples/images/flake.png", minSize: 10, maxSize:32});

});
