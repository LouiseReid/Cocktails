$(document).ready(function(){

  $(".ingredients-button").on("click", function(){
    var clickedButton = $(this).next()
    clickedButton.toggle()
  });


  $(".cocktail-image").mouseover(function (e) {
    $(this).attr("src", $(this).attr("src").replace(".jpeg", ".png"));
    $(this).next().hide()
  }).mouseout(function (e) {
    $(this).attr("src", $(this).attr("src").replace(".png", ".jpeg"));
    $(this).next().show()

  });


});
