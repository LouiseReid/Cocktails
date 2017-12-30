$(document).ready(function(){

  $('.ingredients-button').on('click', function(){
    var clickedButton = $(this).next()
    clickedButton.toggle()
  });




  // $('.cocktail').hover(function () {
  //   $('.cocktail-image').slideUp('slow')
  //   $('.cocktail-name').show()
  // }, function () {
  //   $('.cocktail-image').slideDown('slow')
  //   $('.cocktail-name').hide()
  // });


});
