import React from "react";
import Layout from "../Layout";
import "../../css/styles.css";
// Images
import ReasonImg from "../../images/2-01.png"
import WhatTtynDoImg from "../../images/1-01.png"

const AboutUs = () => {
    const whatIsTTYN = (
        <section>
            <div className="row">
                <div className="col-lg-6">
                    <h2>What is Ticket to YOUR Network?</h2>
                    <p>It's a platform which helps you to align your right network. We have an extensive reach and connect with diversified audience across India under one roof.</p>
                </div>
                <div className="col-lg-6">
                    {/* <img className="pictoImage" src={...} alt="" /> */}
                </div>
            </div>
        </section>
    );

    const list1 = [
        {
            text: 'As an Advertising platform, we bridge the right network for you and help your business grow.'
        },
        {
            text: 'We aim to connect you with HNI\'s, Buyers and End users with our unique reach of diversified audience.'
        },
        {
            text: 'We organise target specific Webinars for your right audience supported by digital promotional campaigns.'
        },
        {
            text: 'We organise informational Webinars inviting Industry leaders from different sectors which facilitates better understanding of the market.'
        },
        {
            text: 'We provide a distinguished podium for aspiring leaders to make an informed decision by engaging them in interactive sessions.'
        }
    ];

    const whatDoesTTYNDo = (
        <section>
            <div className="row">
                <div className="col-lg-6">                    
                    <h2>What does Ticket to your network do?</h2>
                    <ul>
                        {list1.map(item => (
                            <li key={item.text}>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-6">
                    <img className="pictoImage" src={WhatTtynDoImg} alt="" />
                </div>
            </div>
        </section>
    );

    const list2 = [
        {
            text: 'Establish credibility and share your expertise by educating them about your Products/Services.'
        },
        {
            text: 'Minimizing the cost with wider reach and ease of communication.'
        },
        {
            text: 'Develop lucrative relationships with clients, customers and industry-leaders.'
        },
        {
            text: 'Generating interest and hence converting the same in a potential lead.'
        },
        {
            text: 'Two way communication which facilitates audience engagement.'
        }
    ];

    const Reasons = (
        <section>
            <h2 className="reasons-title section-heading">Reasons Why Business Should Hold Webinars On Our Platform</h2>
            <div className="row">
                <div className="reasons-paragraph col-lg-6">
                    <ul>
                        {list2.map(item => (
                            <li key={item.text}>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-6">
                    <img className="pictoImage" src={ReasonImg} alt="" />
                </div>
            </div>
        </section>
    );

    return (
        <Layout
            title="About Us"
            description=""
            className="container-fluid"
        >
            {whatIsTTYN}
            {whatDoesTTYNDo}
            {Reasons}

        </Layout>
    );
};

export default AboutUs;
