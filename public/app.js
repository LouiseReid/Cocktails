$(document).ready(function(){

  $(".ingredients-button").on("click", function(){
    var clickedButton = $(this).next()
    clickedButton.toggle()
  });


  $(".cocktail-image").mouseover(function (e) {
    $(this).attr("src", $(this).attr("src").replace(".jpeg", ".png"));
  }).mouseout(function (e) {
    $(this).attr("src", $(this).attr("src").replace(".png", ".jpeg"));
  });


});
