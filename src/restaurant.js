function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
        breakfast: [],
        lunch: [],
        dinner: []
    }
  };

  return restaurant;
};

function addMenuItem(restaurant, itemToAdd) {
  var menuTypes = Object.keys(restaurant.menus);

  for (var i = 0; i < menuTypes.length; i++) {
    if (menuTypes[i] === itemToAdd.type ) {
      var currentMenuType = menuTypes[i];

      if (restaurant.menus[`${currentMenuType}`].includes(itemToAdd) === false) {
        // if the itemToAdd doesn't exist, add it to the appropriate menu type
        restaurant.menus[`${currentMenuType}`].push(itemToAdd);
      };
    };
  };
};

function removeMenuItem(restaurant, itemName, itemType) {  
  // use the argument 'itemType' to first identify which array to loop thru
  var matchedMenuArray = restaurant.menus[`${itemType}`];

  // then loop thru that array
  for (var i = 0; i < matchedMenuArray.length; i++) {
    // check if the matched menu item's name is equal to the item name passed in
    if (matchedMenuArray[i].name === itemName) {
      // if it does match, splice it out of the array
      // and return an interpolated string
      restaurant.menus[`${itemType}`].splice([i],1);

      return `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`;
    };
  };
  
  // if the 'itemName' wasn't found during the loop, return a different interpolated string
  return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
};


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}