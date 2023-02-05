class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customerName, morningHours) {
    if (morningHours === true) {
      return `Good morning, ${customerName}!`;
    } else {
      return `Hello, ${customerName}!`;
    }
  }

  checkForFood(foodItem) {
    var matchedMenuArray = this.restaurant.menus[`${foodItem.type}`];

      for (var i = 0; i < matchedMenuArray.length; i++) {
        if (matchedMenuArray[i] === foodItem) {
          return `Yes, we're serving ${foodItem.name} today!`;
        };
      };
      
    return `Sorry, we aren't serving ${foodItem.name} today.`;
  }
};

module.exports = Chef;