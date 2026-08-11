import React, { useState } from "react";
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
        name: "Rose",
        price: 16,
        category: "Flowering Plants",
        image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322"
    },
    {
        id: 5,
        name: "Monstera",
        price: 25,
        category: "Tropical Plants",
        image: "https://images.unsplash.com/photo-1614594575804-1b8a0b9f7e0d"
    },
    {
        id: 6,
        name: "Bird of Paradise",
        price: 30,
        category: "Tropical Plants",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
    }
];

function ProductList() {

    const dispatch = useDispatch();

    const [addedItems, setAddedItems] = useState([]);

    const handleAddToCart = (product) => {
        dispatch(addItem(product));

        setAddedItems((previous) => [
            ...previous,
            product.id
        ]);
    };

    const categories = [
        "Indoor Plants",
        "Flowering Plants",
        "Tropical Plants"
    ];

    return (
        <div>

            <nav className="navbar">

                <h1>Paradise Nursery</h1>

                <div>
                    <a href="#plants">Plants</a>
                    <a href="#cart">Cart</a>
                </div>

            </nav>

            <main id="plants" className="product-list">

                <h1>Our Plants</h1>

                {categories.map((category) => (

                    <section key={category}>

                        <h2>{category}</h2>

                        <div className="products">

                            {products
                                .filter(
                                    (product) =>
                                        product.category === category
                                )
                                .map((product) => (

                                    <div
                                        className="product-card"
                                        key={product.id}
                                    >

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                        />

                                        <h3>{product.name}</h3>

                                        <p>
                                            Category: {product.category}
                                        </p>

                                        <p>
                                            ${product.price}
                                        </p>

                                        <button
                                            onClick={() =>
                                                handleAddToCart(product)
                                            }
                                            disabled={addedItems.includes(
                                                product.id
                                            )}
                                        >
                                            {addedItems.includes(product.id)
                                                ? "Added to Cart"
                                                : "Add to Cart"}
                                        </button>

                                    </div>

                                ))}

                        </div>

                    </section>

                ))}

            </main>

        </div>
    );
}

export default ProductList;
