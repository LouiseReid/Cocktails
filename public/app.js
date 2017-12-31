$(document).ready(function(){

  $(".ingredients-button").on("click", function(){
    var ingredients = $(this).next()
    ingredients.toggle()
  });


  $(".cocktail-image").mouseover(function (e) {
    $(this).attr("src", $(this).attr("src").replace(".jpeg", ".png"));
    $(".ingredients-button").hide()
  }).mouseout(function (e) {
    $(this).attr("src", $(this).attr("src").replace(".png", ".jpeg"));
    $(".ingredients-button").show()
  });

  for(var cocktail of cocktailsArray){
    addCocktail(cocktail.name, cocktail.ingredients)
  }

});

 var cocktailsArray = [
  {name: "mojito", ingredients:["lime", "rum", "sugar"]}
]

var createObject = function(){
  $("<div></div>").addClass("cocktail").appendTo('#cocktail-section')

}

var createImage = function(name){
  var img = $("<img>").addClass("cocktail-image").appendTo("cocktail");
  img.attr('src', name)
}

var createIngredients = function(ingredients){
  $("<div></div>").addClass("ingredients").appendTo("cocktail")
  var cList = $("ul.cList")
  $.each(ingredients, function(i){
    var li = $("<li/>").text(ingredients[i]).appendTo(cList)
  })
}

var addCocktail = function(picture, ingredients){
  createObject();
  createImage(picture);
  createIngredients(ingredients);
}
