import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { signup } from "../auth";

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        company: "",
        occupation: "",
        city: "",
        error: "",
        success: false
    });

    const { name, email, password, age, company, occupation, city, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password, age, company, occupation, city }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: "",
                    email: "",
                    password: "",
                    age: "",
                    company: "",
                    occupation: "",
                    city: "",
                    error: "",
                    success: true
                });
            }
        });
    };

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={handleChange("name")}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Age</label>
                <input
                    onChange={handleChange("age")}
                    type="number"
                    className="form-control"
                    value={age}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Company</label>
                <input
                    onChange={handleChange("company")}
                    type="text"
                    className="form-control"
                    value={company}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Occupation</label>
                <input
                    onChange={handleChange("occupation")}
                    type="text"
                    className="form-control"
                    value={occupation}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">City</label>
                <input
                    onChange={handleChange("city")}
                    type="text"
                    className="form-control"
                    value={city}
                />
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{ display: success ? "" : "none" }}
        >
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

    return (
        <Layout
            title="Signup"
            description="Signup to Ticket To Your Network"
            className="container col-md-8 offset-md-2"
        >
            {showSuccess()}
            {showError()}
            {signUpForm()}
        </Layout>
    );
};

export default Signup;
