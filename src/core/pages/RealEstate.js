import React from "react";
import Layout from "../Layout";
import "../../css/styles.css";
// Images import
import RealEstateImg1 from "../../images/REAL ESTATE-01.png";
import RealEstateImg2 from "../../images/physicalOverVirtual.jpeg";

const RealEstate = () => {

    const whatIsVirtualPropertyExpo =(
        <section>
            <h2>Real Estate</h2>
            <div className="row">
                <div className="col-lg-6">
                    <p>Distinctively Virtual property expos provide buyer and seller a podium where they can connect and coordinate with each other from the comfort of their cyberspace. </p>
                    <p>In order to make an informed decision Virtual Expos enables the expert advice and guidance and facilitates the full and relevant information about all the properties listed which in turn gives the buyer an advantage of prominent analysis.</p>
                </div>
                <div className="col-lg-6">
                    <img className="pictoImage" src={RealEstateImg1} alt="Real_Estate_Img" />
                </div>
            </div>
        </section>
    );

    const list = [
        {
            head: 'Convenient and cost effective',
            text: 'Two Cs every buyer and seller looks for in any Property Expo is convenience and cost effectiveness, Virtual Property Expos eliminates cost of multiple infrastructure and labour and provides cyber convenience. Everything is available within a click for both the parties.'
        },
        {
            head: 'Digital Advancement & Promotions',
            text: 'Virtual Property Expos lift up all bars and restrictions over promotions and provide a distinctive podium which facilitates digital promotions. With complete interactive support between a buyer and seller through chats it makes the Expo informative and all relevant information is available for the buyer to avail even after the Expo is over. '
        },
        {
            head: 'Wider Reach',
            text: 'Anyone from across the country can attend Virtual Property Expos which saves a lot of time and most importantly travel expenses eliminating the location barriers. '
        },
        {
            head: 'Real Time Changes',
            text: 'An added advantage is being held virtually is that exhibitors can update and make changes in real time if required. These changes can vary from features to price to promotional techniques.'
        }
    ];

    const differtFromPhysicalExpo = (
        <section>
            <h2>Virtual Property Exhibition over Physical Property Exhibition</h2>
            <div className="row">
                <div className="col-lg-6">
                    <img className="pictoImage" src={RealEstateImg2} alt="Real_Estate_Img" />
                </div>
                <div className="col-lg-6">
                    <ul>
                        {list.map(item => (
                            <li key={item.text}>
                                <p><strong>{item.head}</strong>:- {item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );

    return (
        <Layout
            title="Real Estate"
            description=""
            className="container-fluid"
        >
            {whatIsVirtualPropertyExpo}
            {differtFromPhysicalExpo}
        </Layout>
    );
};

export default RealEstate;
