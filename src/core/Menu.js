import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from "../images/PNG-01.png";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "rgba(0,0,0,.5)" };
    }
};

const Menu = ({ history }) => (
    <div>

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">
                <img src={Logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto" style={isActive(history, "/")}>
                    <NavDropdown title="Webinar" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/mentalhealth">Mental Health</NavDropdown.Item>
                        <NavDropdown.Item href="/sales">Sales</NavDropdown.Item>
                        <NavDropdown.Item href="/finance">Finance</NavDropdown.Item>
                        <NavDropdown.Item href="/cancerawareness">Cancer Awareness</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Health Care" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/psychiatrist">Psychiatrist</NavDropdown.Item>
                        <NavDropdown.Item href="/dentist">Dentist</NavDropdown.Item>
                        <NavDropdown.Item href="/childcare">Child Care</NavDropdown.Item>
                        <NavDropdown.Item href="/yoga">Yoga</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Virtual Exhibition" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/realestate">Real Estate</NavDropdown.Item>
                        <NavDropdown.Item href="/foodandbeverages">Food And Beverages</NavDropdown.Item>
                        <NavDropdown.Item href="/wellness">Wellness</NavDropdown.Item>
                        <NavDropdown.Item href="/constructionmaterials">Construction Materials</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Education" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/virtualclassroom">Virtual Classroom</NavDropdown.Item>
                    </NavDropdown>

                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/user/dashboard")}
                                to="/user/dashboard"
                            >
                                Dashboard
                    </Link>
                        </li>
                    )}

                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/admin/dashboard")}
                                to="/admin/dashboard"
                            >
                                Dashboard
                    </Link>
                        </li>
                    )}

                    <Nav.Link style={isActive(history, "/gallery")} href="/gallery">Gallery</Nav.Link>
                    <Nav.Link style={isActive(history, "/aboutus")} href="/aboutus">About Us</Nav.Link>
                </Nav>

                <Nav className="mr-0">
                    <Nav.Link style={isActive(history, "/cart")} href="/cart">
                        <i class="fas fa-shopping-cart"></i>{" "}
                        <sup style={{ color: "rgba(0,0,0,.5)" }}>
                            <small className="cart-badge">
                                {itemTotal()}
                            </small>
                        </sup>
                    </Nav.Link>

                    {!isAuthenticated() && (
                        <Fragment>
                            <Nav.Link style={isActive(history, "/signin")} href="/signin">Sign In</Nav.Link>
                            <Nav.Link style={isActive(history, "/signup")} href="/signup">Sign Up</Nav.Link>
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                        <Nav.Link
                            style={{ cursor: "pointer", color: "rgba(0,0,0,.5)" }}
                            onClick={() =>
                                signout(() => {
                                    history.push("/");
                                })}
                        >
                            Sign Out
                        </Nav.Link>
                    )}
                </Nav>

                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light" className="rounded mb-0">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>

        {/* -------------------------------------------------------------------------------------- 

        <ul className="nav nav-tabs bg-primary">
            {/* <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/shop")}
                    to="/shop"
                >
                    Shop
                </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            )}
        </ul>

-------------------------------------------------------------------------------------- */}

    </div>
);

export default withRouter(Menu);