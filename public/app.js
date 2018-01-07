$(document).ready(function(){

  $.each(cocktailsArray, function(key, cocktail){
    addCocktail(cocktail.image, cocktail.ingredients)
  })

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

});

 var cocktailsArray = [
  {image: "mojito.jpeg", ingredients:["lime", "rum", "sugar"]},
  {image: "pinacolada.jpeg", ingredients:["coconut liquer", "rum", "pineapple juice"]},
  {image: "tomcollins.jpeg", ingredients:["lemon", "gin", "sugar"]},
  {image: "mojito.jpeg", ingredients:["lime", "rum", "sugar"]},
  {image: "pinacolada.jpeg", ingredients:["coconut liquer", "rum", "pineapple juice"]},
  {image: "tomcollins.jpeg", ingredients:["lemon", "gin", "sugar"]},
  {image: "mojito.jpeg", ingredients:["lime", "rum", "sugar"]},
  {image: "pinacolada.jpeg", ingredients:["coconut liquer", "rum", "pineapple juice"]},
  {image: "tomcollins.jpeg", ingredients:["lemon", "gin", "sugar"]},
  {image: "mojito.jpeg", ingredients:["lime", "rum", "sugar"]},
  {image: "pinacolada.jpeg", ingredients:["coconut liquer", "rum", "pineapple juice"]},
  {image: "tomcollins.jpeg", ingredients:["lemon", "gin", "sugar"]}
]

var createObject = function(){
  $("<div></div>").addClass("cocktail").appendTo("#layout")
}

var createImage = function(image){
  var img = $("<img>").addClass("cocktail-image").appendTo(".cocktail:last");
  img.attr('src', image)
}

var createIngredients = function(ingredients){
  $("<button/>").text("Ingredients").addClass("ingredients-button").appendTo(".cocktail:last")
  $("<div></div>").addClass("ingredients").appendTo(".cocktail:last")
  $.each(ingredients, function(key, ingredient){
    var li = $("<li/>").text(ingredient).appendTo(".ingredients:last")
  })
}

var addCocktail = function(picture, ingredients){
  createObject();
  createImage(picture);
  createIngredients(ingredients);
}
