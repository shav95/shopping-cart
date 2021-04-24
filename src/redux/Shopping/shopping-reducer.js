import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "Yellow Shoes",
            description: "Style# 5FM00650 704. FILA Disruptor II Ray Tracer Canary Yellow White. NO weekends.",
            price: 65.47,
            image: "https://i.ebayimg.com/images/g/xLcAAOSwmgNd~VW4/s-l400.jpg"
        },
        {
            id: 2,
            title: "Blue Shoes",
            description: "Men's UA SC 3ZER0 III Basketball Shoes",
            price: 42.19,
            image: "https://underarmour.scene7.com/is/image/Underarmour/3022048-400_PAIR?rp=standard-30pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=566&hei=708&size=536,688"
        },
        {
            id: 3,
            title: "Green Shoes",
            description: "For trail-running adventure seekers, the Saucony Men’s Everun Mad River Trail Running Shoe is a fast",
            price: 36.55,
            image: "https://fgl.scene7.com/is/image/atmosphere/FGL_332786675_30_f?bgColor=0,0,0,0&resMode=sharp2&op_sharpen=1&hei=520"
        },
        {
            id: 4,
            title: "Red Shoes",
            description: "Canvas Shoes For Men  (Red, White)",
            price: 18.79,
            image: "https://rukminim1.flixcart.com/image/714/857/joud1u80/shoe/m/e/v/17-2101-red-6-karnaaz-red-original-imaerc55abqm8pmy.jpeg?q=50"
        },
    ], //{id, title, descr, price, img}
    cart: [], //{id, title, descr, price, img, qty}
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            //Get the item data from the products array
            const item = state.products.find(prod => prod.id === action.payload.id)
            // Check if the Item is in the card already
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty: 1}],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item)
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            };
        default:
            return state;
    }
};

export default shopReducer;