$(document).ready(function() {

  function rollDice(){
    $('#dice-container').addClass('roll')
    $('.die').addClass('spin')
  }

  $('.wrapper').click(() => rollDice())

  $('body').snowfall({image :"bower_components/jquery-snowfall/examples/images/flake.png", minSize: 10, maxSize:32});

});
