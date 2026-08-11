import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

function App() {
    const [showProducts, setShowProducts] = useState(false);

    return (
        <div>

            {!showProducts ? (
                <div className="landing-page">

                    <div className="landing-content">

                        <h1>Paradise Nursery</h1>

                        <p>
                            Welcome to Paradise Nursery, your destination
                            for beautiful and healthy plants.
                        </p>

                        <button
                            onClick={() => setShowProducts(true)}
                        >
                            Get Started
                        </button>

                    </div>

                </div>
            ) : (
                <ProductList />
            )}

        </div>
    );
}

export default App;
