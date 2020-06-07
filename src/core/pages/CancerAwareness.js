import React from "react";
import Layout from "../Layout";

// Images import
import Cancer1 from "../../images/CANCER-01.png";
import Cancer2 from "../../images/CANCER-02.jpeg";
import Cancer3 from "../../images/CANCER-03.jpeg";

const CancerAwareness = () => {

    const whatIsCancer = (

        <section>
            <h2>What is cancer ?</h2>
            <div className="row">
                <div className="col-lg-6">
                    <p>Cancer is basically a group of diseases which takes place when a group of body cells starts to form and grow abnormally. These extra cells which grow when the body doesn’t need them and keep on dividing themselves into surrounding tissues are known as tumors.</p>
                    <p>Untreated cancer results in hazardous illness, disability and death.</p>
                    
                    <br/>

                    <h2>How Does Cancer Spread ?</h2>
                    <p>Cancer usually spreads by traveling to the nearby tissues through blood streams. However Cancer also spreads to the distant body parts and when such scenario occurs it is known as metastatic cancer.</p>
                </div>
                <div className="col-lg-6">
                    <img className="pictoImage" src={Cancer1} alt="Cancer_Img" />
                </div>
            </div>
        </section>

    );

    const list = [
        {
            text: 'Breast Cancer'
        },
        {
            text: 'Oral Cancer'
        },
        {
            text: 'Cervical Cancer'
        },
        {
            text: 'Skin Cancer (Melanoma)'
        },
        {
            text: 'Lymphoma'
        },
        {
            text: 'Gastric Cancer'
        },
        {
            text: 'Leukemia '
        },
        {
            text: 'Lung Cancer'
        },
        {
            text: 'Colorectal Cancer'
        },
        {
            text: 'Esophageal cancer'
        },
        {
            text: 'Prostate Cancer'
        },
        {
            text: 'Gallbladder Cancer'
        }
    ];

    const typesOfCancer = (
        <section>
            <h3>Types of Cancer:-</h3>
            <div className="row">
                <div className="col-lg-6">
                    <ul>
                        {list.map(item => (
                            <li key={item.text}>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-6">
                <img className="pictoImage" src={Cancer2} alt="Cancer_Img" />
                </div>
            </div>
        </section>
    );

    const whoFacts = (
        <section>
            <h3>Some Facts by WHO</h3>
            <div className="row">
                <div className="col-lg-6">
                    
                    <p>India had an estimated 1.16 million new cancer cases in 2018.</p>
                    
                    <p>One in 10 Indians will develop cancer during their lifetime and one in 15 will die of the disease.</p>
                    
                    <p>The World Cancer Report said according to the estimated cancer burden in India in 2018, there are about 1.16 million new cancer cases, 784,800 cancer deaths, and 2.26 million 5-year prevalent cases in India’s population of 1.35 billion.</p>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </section>
    );

    return (
        <Layout
            title="Cancer Awareness"
            description=""
            className="container-fluid"
        >
            {whatIsCancer}
            {typesOfCancer}
            {whoFacts}

        </Layout>
    );
};

export default CancerAwareness;