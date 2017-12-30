$(document).ready(function(){

  $('.ingredients-button').on('click', function(){
    $('.ingredients').toggle();
  });


  $(".cocktail").hover(function () {
    $(".cocktail-image").slideUp('slow')
    $('.cocktail-name').show()
  }, function () {
    $(".cocktail-image").slideDown('slow')
    $('.cocktail-name').hide()

  });


});
