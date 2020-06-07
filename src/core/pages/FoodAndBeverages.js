import React from "react";
import Layout from "../Layout";
// Images import
import FoodImg from "../../images/FOOD-01.png";
import NishantImg from "../../images/NishantSahil.png";

const FoodAndBeverages = () => {

    const foodAndBeverages = (
        <section>
            <div className="row">
                <div className="col-lg-6">
                    <h2>Food And Beverages</h2>
                    <p>The Indian Food and Beverage Industry is one of the growth oriented industries. Be it in terms of adjusting to uncertainties and changing dynamics or expanding rapidly, it has always shown great potential.</p>

                    <h2>Factors that has led to exponential growth of FandB Sector in India</h2>
                    <p>
                        <ul>
                            <li>Urbanisation</li>
                            <li>Increase in Income</li>
                            <li>Ease of availability</li>
                            <li>Increase in Demand and Supply</li>
                            <li>Consumers are aware</li>
                            <li>Reliability </li>
                            <li>Scalability </li>
                            <li>Being more Technology Driven</li>
                        </ul>
                    </p>
                </div>
                <div className="col-lg-6">
                    <img className="pictoImage" src={FoodImg} alt="FoodImg" />
                </div>
            </div>
        </section>

    );

    const statistic = (
        <section>
            <div className="row">
                <div className="col-lg-12">
                    <h2>As per the in depth statistical analysis by Statista</h2>
                    <p>
                        <ul>
                            <li>Revenue in the Food and Beverages segment amounts to US$5,880m in 2020.</li>
                            <li>Revenue is expected to show an annual growth rate (CAGR 2020-2024) of 14.4%, resulting in a market volume of US$10,058m by 2024.</li>
                            <li>User penetration is 11.9% in 2020 and is expected to hit 22.6% by 2024.</li>
                            <li>The average revenue per user (ARPU) currently amounts to US$35.80.</li>
                            <li>In global comparison, most revenue is generated in China (US$129,543m in 2020).</li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>

    );

    const NishantSahil = (
        <section>
            <div className="row">
                <div className="col-md-3 docDetails">
                    <img className="speakerImage" src={NishantImg} alt="NishantSahil" />
                    <div className="docInfo">
                        <h5>Nishant Sahil</h5><br />
                        <h6>GM - Sales, Food and Beverages, Institutional and Exports Biz (India, Middle East, APAC, AFRICA, SAARC)</h6><br />
                    </div>
                </div>
                <div className="col-md-5 docAboutWithoutBooking">
                    <p>Diversity is key to success and fortunately he experienced it in his career by working and performing in segments like FMCG - Food and Beverages, Telecom, Petrochemical, International Remittance Forex and IT. Exposure in Handling National and Overseas market with Hands on expertise in Partner Brand distribution and Govt. Business. International /Large Accounts Institution and Govt. CSD and CPC Business/Emerging Distribution Business are Nishant’s expertise. He enjoys setting up Launches/New Market Penetration/ Product Launches/Team Building and Revenue Chase. He says work Smart - Party Hard, help and train team creates a happy environment for team and cross function. He is open adapt latest trends new technology. Staying fit and learn on each step is his ideology. </p>
                </div>
                <div className="col-md-4"></div>
            </div>
        </section>
    );

    return (
        <Layout
            title="Food And Beverages"
            description=""
            className="container-fluid"
        >
            {foodAndBeverages}
            {statistic}
            <hr />
            {NishantSahil}
        </Layout>
    );
};

export default FoodAndBeverages;
