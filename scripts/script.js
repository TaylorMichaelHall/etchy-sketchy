$(document).ready(function(){
  for(var x = 0; x < 50; x++) {
    for(var y = 0; y < 45; y++) {
      var box = $("<div class='box'></div>");
      box.appendTo('#field');
    }
  }

// Working mouseenter version
/*
    $('.box').mouseenter(function(){
        $(this).addClass('sketched');
    });
*/

// Working hover version

  $('.box').hover(function(){
    $(this).addClass('pressed');
  }, function() {
        $(this).addClass('sketched');
  });

//semi working mousedown version
/*
  $('.box').mouseup(function() {
      $( this ).addClass('sketched');
    })
    .mousedown(function() {
      $( this ).addClass('pressed');
    });
*/

//end bracket
});
