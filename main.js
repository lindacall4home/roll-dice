$(document).ready(function() {

  function rollDice(){
    startDieAnimation($('#die-container1'), 'roll1');
    startDieAnimation($('#die-container2'), 'roll2');
  }

  function startDieAnimation($dieContainer, rollAnimationName){
    $dieContainer.addClass(rollAnimationName);
    $dieContainer.children('.die').addClass('spin');
  }

  $('#die-container1').on("animationend", e => {
    removeAnimationClasses($('#die-container1'), 'roll1');
    setDieFrontFace($('#die-container1'));
  });

  $('#die-container2').on("animationend", e => {
    removeAnimationClasses($('#die-container2'), 'roll2');
    setDieFrontFace($('#die-container2'));
  });

  function removeAnimationClasses($dieContainer, rollAnimationName){
    $dieContainer.removeClass(rollAnimationName);
    $dieContainer.children('.die').removeClass('spin');
  }

  function setDieFrontFace($dieContainer){
    let die = $dieContainer.children('.die')[0];
    $(die).removeClass('show' + die.dataset.front);

    let newFront = Math.floor(Math.random() * 6) + 1;
    die.dataset.front = newFront;
    $(die).addClass('show' + newFront);
  }

  function init(){

    $('body').snowfall({image :"bower_components/jquery-snowfall/examples/images/flake.png", minSize: 10, maxSize:32});

    setDieFrontFace($('#die-container1'));
    setDieFrontFace($('#die-container2'));

    $('#roll-btn').click(() => rollDice());
  }

  init();

});
