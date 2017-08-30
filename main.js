$(document).ready(function() {

  function rollDie(){
    let result = Math.floor(Math.random() * 6) + 1;
    return result;
  }

  function rollDice(){
    $('#die1').text(rollDie());
    $('#die2').text(rollDie());
  }

  $('#roll-button').click(() => rollDice())

  $('body').snowfall({image :"bower_components/jquery-snowfall/examples/images/flake.png", minSize: 10, maxSize:32});

  rollDice();

});
