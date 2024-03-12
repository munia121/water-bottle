import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoreCart, removeFromLs } from "../../utilities/Localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart,setCart] = useState([])


    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data =>setBottles(data))
    },[])


    // load cart from local storage
    useEffect(() =>{
        console.log('called the use effect',bottles.length)
        if(bottles.length){
            const storedCart = getStoreCart()
            console.log(storedCart,bottles)
            const saveCart = [];
            for(const id of storedCart){
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    saveCart.push(bottle)
                }

            }
            console.log('save cart', saveCart)
            setCart(saveCart)


        }
    },[bottles])


    const handlerToCart = bottle =>{
        console.log('bottle going to be add')
        const newCart = [...cart, bottle];
        setCart(newCart)
        addToLs(bottle.id)
    }


    const handleRemoveFromCart = id =>{
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from Ls
        removeFromLs(id)
    }


    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
           <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>


            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id}
                        bottle={bottle}
                        handlerToCart= {handlerToCart}
                        ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;