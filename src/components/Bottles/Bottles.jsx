import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart,setCart] = useState([])


    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data =>setBottles(data))
    },[])



    const handlerToCart = bottle =>{
        console.log('bottle going to be add')
        const newCart = [...cart, bottle];
        setCart(newCart)
    }


    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <h4>Cart:{cart.length}</h4>


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