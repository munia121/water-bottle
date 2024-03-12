import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle,handlerToCart}) => {
    // console.log(bottle)

    const {name,img, price} = bottle;




    return (
        <div className="bottle-container">
            <h3>Bottle: {name}</h3>
            <img style={{width:300}} src={img} alt="" />
            <p>Price{price}</p>
            <button onClick={() =>handlerToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handlerToCart: PropTypes.func.isRequired
}

export default Bottle;