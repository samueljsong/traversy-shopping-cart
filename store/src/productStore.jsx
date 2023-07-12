
const productsArray = [
    {
        id: "1",
        name: "Coffee",
        price: 4.99
    },
    {
        id: "2",
        name: "Tea",
        price: 3.99
    },
    {
        id: "3",
        name: "Waffles",
        price: 10.99
    }
]

function getProductData(id) {
    return productsArray.find(product => product.id === id)
}

export { productsArray, getProductData };