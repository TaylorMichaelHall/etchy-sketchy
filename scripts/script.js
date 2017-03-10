$(document).ready(function(){
  for(var x = 0; x < 50; x++) {
    for(var y = 0; y < 45; y++) {
      var box = $("<div class='box'></div>");
      box.appendTo('#field');
    }
  }

/* Working non-hover version
    $('.box').mouseenter(function(){
        $(this).addClass('sketched');
    });
*/

  $('.box').hover(function(){
    $(this).addClass('pressed');
  }, function() {
        $(this).addClass('sketched');
  });
});
