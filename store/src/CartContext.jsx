import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productStore";

// Context (cart, addToCart, RemoveFromCart)
// Context gives a provider
// Provider => gives your React app access to all the things in your context.
// so we do not have to use props.

// The reason why the variables and functions are empty within context
// is because its stating that a variable or function SHOULD be here.
export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {

    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined){
            return 0;
        }

        return quantity;
    }
    
    function addOneToCart(id){
        const quantity = getProductQuantity(id)

        if(quantity === 0){ //Product is not in cart
            setCartProducts([...cartProducts, {id: id, quantity: 1}])
        }else { // Product is in cart
            setCartProducts(
                cartProducts.map(
                    product => product.id === id ? {...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }
    }

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);

        if(quantity === 1){
            deleteFromCart(id);
        }else{
            setCartProducts(
                cartProducts.map(
                    product => product.id === id ? {...product, quantity: product.quantity - 1}
                    : product
                )
            )
        }
    }

    function deleteFromCart(id){
        setCartProducts(
            cartProducts =>
            cartProducts.filter(product => {
                return product.id !== id;
            })
        )
    }

    function getTotalCost(){
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        })
        return totalCost.toFixed(2);
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


// The actual definitions of the functions and variables will be given down here
// and be passed as a parameter to the Provider.


