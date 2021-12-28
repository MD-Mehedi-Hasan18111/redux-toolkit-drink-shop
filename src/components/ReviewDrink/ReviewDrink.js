import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartContext } from '../../App';
import { orderConfirm } from '../../redux/slice';
import NavBar from '../Navbar/Navbar';
import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewDrink = () => {

    // const [cart, setCart] = useContext(cartContext);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.juice.cart);

    // console.log(cart);

    const handleCartOrder = () => {
        dispatch(orderConfirm([]));
    }

    return (
        <div style={{ margin: "20px" }}>
            {
                (cart.length > 0) ? cart.map(drink => <ReviewItem drink={drink}></ReviewItem>) : <h2 className="text-center">Your Cart is Empty!</h2>
            }
            <div className="text-center">
                <Link to='/home'>
                    <button className="btn btn-danger me-4">Back to Home</button>
                </Link>
                {!cart.length ? "" : <Link to='/completeOrder'>
                    <button onClick={handleCartOrder} className="btn btn-success">Confirm Order</button>
                </Link>}
            </div>
        </div>
    );
};

export default ReviewDrink;