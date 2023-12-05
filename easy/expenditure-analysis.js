/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let map1 = new Map();
  for (let val of transactions) {
    // val is a object now
    if (map1.has(val.category)) {
      map1.set(val.category, map1.get(val.category) + val.price);
    } else {
      map1.set(val.category, val.price);
    }
  }
  let output1 = [];
  for (let arr of [...map1]) {
    output1.push({
      category: arr[0],
      totalSpent: arr[1],
    });
  }
  return output1;
}

module.exports = calculateTotalSpentByCategory;
