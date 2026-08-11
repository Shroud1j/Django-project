import React from "react";
import { useDispatch } from "react-redux";
import {
    removeItem,
    updateQuantity
} from "./CartSlice";

function CartItem({ item }) {
    const dispatch = useDispatch();

    const increaseQuantity = () => {
        dispatch(
            updateQuantity({
                id: item.id,
                quantity: item.quantity + 1
            })
        );
    };

    const decreaseQuantity = () => {
        if (item.quantity > 1) {
            dispatch(
                updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1
                })
            );
        }
    };

    const handleRemove = () => {
        dispatch(removeItem(item.id));
    };

    return (
        <div className="cart-item">

            <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
            />

            <div className="cart-item-details">

                <h2>{item.name}</h2>

                <p>Category: {item.category}</p>

                <p>Price: ${item.price}</p>

                <div className="quantity-controls">

                    <button onClick={decreaseQuantity}>
                        -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={increaseQuantity}>
                        +
                    </button>

                </div>

                <p>
                    Total: $
                    {(item.price * item.quantity).toFixed(2)}
                </p>

                <button onClick={handleRemove}>
                    Remove
                </button>

            </div>

        </div>
    );
}

export default CartItem;
