$(document).ready(function(){

console.log(cocktailsArray);
  $.each(cocktailsArray, function(key, cocktail){
    addCocktail(cocktail.name, cocktail.ingredients)
  })

  $(".ingredients-button").on("click", function(){
    console.log($(this).next());
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

});

 var cocktailsArray = [
  {name: "mojito.jpeg", ingredients:["lime", "rum", "sugar"]},
  {name: "pinacolada.jpeg", ingredients:["coconut liquer", "rum", "pineapple juice"]},
  {name: "tomcollins.jpeg", ingredients:["lemon", "gin", "sugar"]}
]

var createObject = function(){
  $("<div></div>").addClass("cocktail").appendTo('main')
}

var createImage = function(name){
  var img = $("<img>").addClass("cocktail-image").appendTo(".cocktail");
  img.attr('src', name)
  $("<button/>").text("Ingredients").addClass("ingredients-button").appendTo(".cocktail")
}

var createIngredients = function(ingredients){
  $("<div></div>").addClass("ingredients").appendTo(".cocktail")
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
