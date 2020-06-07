import React from "react";
import Menu from "./Menu";
import Copyright from "./Copyright";
import "../styles.css";
const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
        <div className="main-container">
            <Menu />
            <div className="jumbotron">
                <h1>{title}</h1>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
            <Copyright />
        </div>
    );

export default Layout;
