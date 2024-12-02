import { createContext, useState } from "react";
import product from "../array/products";  // Assuming you have a list of products

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [wishlist, setWishlist] = useState({});  // Track product ids in the wishlist
    const [change_heart, setChangeHeart] = useState({});  // Track heart color state for each product

    const addToWishlist = (itemId) => {
        // Check if the product is already in the wishlist
        const isInWishlist = wishlist[itemId];

        setWishlist((prevWishlist) => {
            const newWishlist = { ...prevWishlist };
            if (isInWishlist) {
                // If already in wishlist, remove it
                delete newWishlist[itemId];
            } else {
                // If not in wishlist, add it
                newWishlist[itemId] = 1;
            }
            return newWishlist;
        });

        setChangeHeart((prevChangeHeart) => ({
            ...prevChangeHeart,
            [itemId]: !prevChangeHeart[itemId],  // Toggle heart color (red/gray)
        }));
    };

    const [cart, setcart] = useState({})

    const addToCart = (itemId) => {
        setcart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[itemId]) {
                newCart[itemId] += 1;
            } else {
                newCart[itemId] = 1;
            }
            return newCart;
        });
    };

    const removeFromCart = (itemid) => {
        setcart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[itemid] > 1) {
                newCart[itemid] -= 1; // Decrease quantity by 1
            }
            return newCart;
        });
    };

    const removeall = (itemid) => {
        setcart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[itemid]) {
                delete newCart[itemid]; // Corrected the variable name here
            }
            return newCart;
        });
    };

    const URL = "http://localhost:3000";

    const contextValue = {
        product,
        addToWishlist,
        change_heart,
        wishlist,
        addToCart,
        cart,
        removeFromCart,
        removeall,
        URL
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;