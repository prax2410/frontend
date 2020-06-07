import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { read, update, updateUser } from "./apiUser";

const Profile = ({ match }) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        company: "",
        occupation: "",
        city: "",
        error: false,
        success: false
    });

    const { token } = isAuthenticated();
    const { name, email, password, age, company, occupation, city, error, success } = values;

    const init = userId => {
        // console.log(userId);
        read(userId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ 
                    ...values, 
                    name: data.name, 
                    email: data.email,
                    age: data.age,
                    company: data.company,
                    occupation: data.occupation,
                    city: data.city 
                });
            }
        });
    };

    useEffect(() => {
        init(match.params.userId);
    }, []);

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
        update(match.params.userId, token, { name, email, password, age, company, occupation, city }).then(
            data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    updateUser(data, () => {
                        setValues({
                            ...values,
                            name: data.name,
                            email: data.email,
                            age: data.age,
                            company: data.company,
                            occupation: data.occupation,
                            city: data.city,
                            success: true
                        });
                    });
                }
            }
        );
    };

    const redirectUser = success => {
        if (success) {
            return <Redirect to="/cart" />;
        }
    };

    const profileUpdate = (name, email, password, age, company, occupation, city) => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    onChange={handleChange("name")}
                    className="form-control"
                    value={name}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    type="email"
                    onChange={handleChange("email")}
                    className="form-control"
                    value={email}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    type="password"
                    onChange={handleChange("password")}
                    className="form-control"
                    value={password}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Age</label>
                <input
                    type="number"
                    onChange={handleChange("age")}
                    className="form-control"
                    value={age}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Company</label>
                <input
                    type="text"
                    onChange={handleChange("company")}
                    className="form-control"
                    value={company}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Occupation</label>
                <input
                    type="text"
                    onChange={handleChange("occupation")}
                    className="form-control"
                    value={occupation}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">City</label>
                <input
                    type="text"
                    onChange={handleChange("city")}
                    className="form-control"
                    value={city}
                />
            </div>

            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
    );

    return (
        <Layout
            title="Profile"
            description="Update your profile"
            className="container-fluid"
        >
            <h2 className="mb-4">Profile update</h2>
            {profileUpdate(name, email, password, age, company, occupation, city)}
            {redirectUser(success)}
        </Layout>
    );
};

export default Profile;
