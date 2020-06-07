import React, { useState, useEffect } from "react";
import {
    processPayment,
    createOrder
} from "./apiCore";
import { emptyCart } from "./cartHelpers";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

// Razorpay
import logo from '../images/Logo.png';
// import './App.css';

// Razorpay
const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true);
        }
        script.onerror = () => {
            resolve(false);
        }
        document.body.appendChild(script);
    });
};

const __DEV__ = document.domain === "localhost";

const Checkout = ({ products }) => {

    const [data, setData] = useState({
        loading: false,
        success: false,
        error: "",
    });


    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    // Razorpay
    const displayRazorpay = () => {
        const res = loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const data = fetch("http://localhost:3000/razorpay", { method: "POST" }).then((t) =>
            t.json()
        );

        console.log(data);

        const options = {
            key: __DEV__ ? "rzp_test_fUYsuxleH449XZ" : "PRODUCTION_KEY",
            currency: data.currency,
            amount: getTotal() * 100,
            order_id: data.id,
            name: "Ticket To Your Network",
            description: "",
            image: { logo },
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const showCheckout = () => {
        return isAuthenticated() ? (
            <div className="App">
                <header className="App-header">
                    <button className="btn btn-success" onClick={displayRazorpay} target="_blank"
                        rel="noopener noreferrer">Checkout</button>
                </header>
            </div>

        ) : (
                <Link to="/signin">
                    <button className="btn btn-primary">Sign in to checkout</button>
                </Link>
            );
    };

    const showError = error => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showSuccess = success => (
        <div
            className="alert alert-info"
            style={{ display: success ? "" : "none" }}
        >
            Thanks! Your payment was successful!
        </div>
    );

    const showLoading = loading =>
        loading && <h2 className="text-danger">Loading...</h2>;

    return (
        <div>
            <h2>Total: ₹ {getTotal()}</h2>
            {showLoading(data.loading)}
            {showSuccess(data.success)}
            {showError(data.error)}
            {showCheckout()}
        </div>
    );
};

export default Checkout;
