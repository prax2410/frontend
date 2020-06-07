import React from "react";
import Layout from "../Layout";
// Images import
import SalesImg1 from "../../images/SALES-01.png";
import SalesImg2 from "../../images/SALES 2-01.png";

const Sales = () => {
    const salesAwareness = (
        <img className="pictoImage" src={SalesImg1} alt="Sales1" />
    );
    return (
        <Layout
            title="Sales"
            description=""
            className="container-fluid"
        >
            {salesAwareness}
        </Layout>
    );
};

export default Sales;
