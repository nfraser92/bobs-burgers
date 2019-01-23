// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    orders: [],                             /* Create empty array to store orders in once they are passed through function */
    name: "Bob's Burgers",                  
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    getAllOrders: function () {
        return this.orders
    },
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "small"
}
const fishSandwich = {
    sandwichType: "fish",
    fries: false,
    drinkSize: "medium"
}
const beefBurgerMeal = {
    sandwichType: "beef",
    fries: true,
    drinkSize: "large"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(fishSandwich)
restaurant.placeOrder(beefBurgerMeal)

// Invoke the function to return the list of all orders
const allOrders = restaurant.getAllOrders()

// Output all orders to the console using console.table()
console.table(allOrders)