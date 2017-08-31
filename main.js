$(document).ready(function() {

  // function init() {
  //   var box = document.querySelector('.container').children[0],
  //       showPanelButtons = document.querySelectorAll('#show-buttons button'),
  //       panelClassName = 'show-front',
  //
  //       onButtonClick = function( event ){
  //         $('#cube').removeClass( panelClassName );
  //         panelClassName = event.target.className;
  //         $('#cube').addClass( panelClassName );
  //       };
  //
  //   for (var i=0, len = showPanelButtons.length; i < len; i++) {
  //     showPanelButtons[i].addEventListener( 'click', onButtonClick);
  //   }
  // };


  // function rollDie(){
  //   let result = Math.floor(Math.random() * 6) + 1;
  //   return result;
  // }
  //
  // function rollDice(){
  //   $('#die1').text(rollDie());
  //   $('#die2').text(rollDie());
  // }
  //
  // $('#roll-button').click(() => rollDice())

  // init();
  $('body').snowfall({image :"bower_components/jquery-snowfall/examples/images/flake.png", minSize: 10, maxSize:32});

  // rollDice();

});
