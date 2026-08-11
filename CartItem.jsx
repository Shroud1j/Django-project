import React from "react";
import { useDispatch } from "react-redux";
import {
    removeItem,
    updateQuantity
} from "./CartSlice";

function CartItem({ items }) {

    const dispatch = useDispatch();

    const increaseQuantity = (item) => {
        dispatch(
            updateQuantity({
                id: item.id,
                quantity: item.quantity + 1
            })
        );
    };

    const decreaseQuantity = (item) => {

        if (item.quantity > 1) {
            dispatch(
                updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1
                })
            );
        }
    };

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    };

    const calculateTotalAmount = () => {
        return items.reduce(
            (total, item) =>
                total + item.price * item.quantity,
            0
        );
    };

    return (
        <div className="shopping-cart">

            <h1>Shopping Cart</h1>

            {items.map((item) => (

                <div className="cart-item" key={item.id}>

                    <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                    />

                    <div className="cart-item-details">

                        <h2>{item.name}</h2>

                        <p>
                            Unit Price: ${item.price}
                        </p>

                        <div className="quantity-controls">

                            <button
                                onClick={() =>
                                    decreaseQuantity(item)
                                }
                            >
                                -
                            </button>

                            <span>
                                {item.quantity}
                            </span>

                            <button
                                onClick={() =>
                                    increaseQuantity(item)
                                }
                            >
                                +
                            </button>

                        </div>

                        <p>
                            Item Total: $
                            {(item.price * item.quantity).toFixed(2)}
                        </p>

                        <button
                            onClick={() =>
                                handleRemove(item.id)
                            }
                        >
                            Remove
                        </button>

                    </div>

                </div>

            ))}

            <div className="cart-total">

                <h2>
                    Total Cart Amount: $
                    {calculateTotalAmount().toFixed(2)}
                </h2>

            </div>

        </div>
    );
}

export default CartItem;
