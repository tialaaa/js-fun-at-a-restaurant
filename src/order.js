function takeOrder(newOrder, ordersList) {
  if (ordersList.length < 3) {
    ordersList.push(newOrder);
  };
};

function refundOrder(id, ordersList) {
  for (var i = 0; i < ordersList.length; i++) {
    if (ordersList[i].orderNumber === id) {
      ordersList.splice(i,1);
    };
  };
};

function listItems(ordersList) {
  var itemsList = [];

  for (var i = 0; i < ordersList.length; i++) {
    itemsList.push(ordersList[i].item);
  };

  return itemsList.join(", ");
};

function searchOrder(ordersList, search) {
  for (var i = 0; i < ordersList.length; i++) {
    if (ordersList[i].item.includes(search) === true) {
      return true;
    };
  };

  return false;
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}