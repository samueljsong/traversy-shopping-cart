//coffee:price_1NSvzeGnysE5rd1T4Odgb3ty
//tea:price_1NSw0gGnysE5rd1T4nF0UJxO
//waffles:price_1NSw1DGnysE5rd1TMGqAkOXc
const productsArray = [
    {
        id: "price_1NSvzeGnysE5rd1T4Odgb3ty",
        name: "Coffee",
        price: 4.99
    },
    {
        id: "price_1NSw0gGnysE5rd1T4nF0UJxO",
        name: "Tea",
        price: 3.99
    },
    {
        id: "price_1NSw1DGnysE5rd1TMGqAkOXc",
        name: "Waffles",
        price: 10.99
    }
]

function getProductData(id) {
    return productsArray.find(product => product.id === id)
}

export { productsArray, getProductData };