import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
    {
        id: 1,
        name: "Aloe Vera",
        price: 15,
        category: "Indoor Plants",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    },
    {
        id: 2,
        name: "Snake Plant",
        price: 20,
        category: "Indoor Plants",
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae2c5b"
    },
    {
        id: 3,
        name: "Peace Lily",
        price: 18,
        category: "Flowering Plants",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
    },
    {
        id: 4,
        name: "Monstera",
        price: 25,
        category: "Tropical Plants",
        image: "https://images.unsplash.com/photo-1614594575804-1b8a0b9f7e0d"
    },
    {
        id: 5,
        name: "Money Plant",
        price: 12,
        category: "Indoor Plants",
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
    },
    {
        id: 6,
        name: "Rubber Plant",
        price: 22,
        category: "Indoor Plants",
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
    }
];

function ProductList() {
    const dispatch = useDispatch();

    return (
        <div className="product-list">

            <h1>Paradise Nursery</h1>

            <p>
                Explore our collection of beautiful and healthy plants.
            </p>

            <div className="products">

                {products.map((product) => (

                    <div className="product-card" key={product.id}>

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                        <h2>{product.name}</h2>

                        <p>Category: {product.category}</p>

                        <p>${product.price}</p>

                        <button
                            onClick={() => dispatch(addItem(product))}
                        >
                            Add to Cart
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default ProductList;
