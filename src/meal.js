function nameMenuItem(item) {
  return `Delicious ${item}`;
};

function createMenuItem(nameInput, priceInput, typeInput) {
  var menuItem = {
    name: nameInput,
    price: priceInput,
    type: typeInput
  };
  return menuItem;
};

function addIngredients(newIngredient, ingredients){
  if (ingredients.includes(newIngredient)){
    return ingredients
  } else {
  ingredients.push(newIngredient);
  }
  return ingredients;
};

function formatPrice (initialPrice) {
  return `$${initialPrice}`;
};

function decreasePrice(fullPrice) {
  return fullPrice*.9;
};

function createRecipe(aTitle, someIngredients, aMenuItemType){
  var recipe = {
    title: aTitle,
    ingredients: someIngredients,
    type: aMenuItemType,
  };
  return recipe;
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


