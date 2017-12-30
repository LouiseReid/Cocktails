$(document).ready(function(){

  $('.ingredients-button').on('click', function(){
    $('.ingredients').toggle();
  });

  // $('.cocktail-image').hover( function (){
  //   $('.cocktail-image').replace('.cocktail-name')
  // })

  $('.cocktail').on('click', function(){
    $('.cocktail-image').replaceWith('cocktail-name')
  })


});
