import React from "react";
import Layout from "../Layout";
// Images import
import ConstructionImg from "../../images/CONSTRUCTION-01.png";

const ConstructionMaterials = () => {

    const construction = (
        <img className="pictoImage" src={ConstructionImg} alt="Contruction" />
    );

    return (
        <Layout
            title="Construction Materials"
            description=""
            className="container-fluid"
        >
            {construction}
            
        </Layout>
    );
};

export default ConstructionMaterials;
