$(document).ready(function(){

  // $.each(cocktailsArray, function(key, cocktail){
  //   addCocktail(cocktail.image, cocktail.ingredients)
  // })

  // cocktailsArray.forEach(function(cocktail){
  //   addCocktail(cocktail.image, cocktail.ingredients)
  // })

  for (var i=0; i<cocktailsArray.length; i++) {
    addCocktail(cocktailsArray[i].image, cocktailsArray[i].ingredients)
  }

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
  {image: "mojito.jpeg", ingredients:["lime", "rum", "sugar"]},
  {image: "pinacolada.jpeg", ingredients:["coconut liquer", "rum", "pineapple juice"]},
  {image: "tomcollins.jpeg", ingredients:["lemon", "gin", "sugar"]}
]

var createObject = function(){
  $("<div></div>").addClass("cocktail").appendTo('main')
}

var createImage = function(image){
  var img = $("<img>").addClass("cocktail-image").appendTo(".cocktail");
  img.attr('src', image)
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
