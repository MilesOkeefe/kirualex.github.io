// Generated by CoffeeScript 1.3.3
(function() {

  ($(document)).ready(function() {
    var audio, button, flash;
    audio = document.getElementById('audio');
    button = $('button.bam');
    sheep_off = $('.sheep_off');
    sheep_on = $('.sheep_on');
    sheep_on.hide();
    button.bind('touchstart', function() {
      return button.attr(':active');
    });
    return button.bind('click touchend', function() {
      sheep_off.hide();
      sheep_on.show();
      setTimeout(function(){
        sheep_off.show();
        sheep_on.hide();
      },1600);
      
      audio.currentTime = 0;
      audio.play();
    });
  });

}).call(this);
