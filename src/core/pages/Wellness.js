import React from "react";
import Layout from "../Layout";
// Images import
import WellnessImg from "../../images/WELLNESS-01.png";

const Wellness = () => {

    const wellnessAwareness = (
        <img className="pictoImage" src={WellnessImg} alt="wellness" />
    );
    return (
        <Layout
            title="Wellness"
            description=""
            className="container-fluid"
        >

            {wellnessAwareness}

        </Layout>
    );
};

export default Wellness;
