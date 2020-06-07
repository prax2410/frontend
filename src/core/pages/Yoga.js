import React from "react";
import Layout from "../Layout";
// Images import
import YogaImg from "../../images/YOGA-01.png";

const Yoga = () => {

    const yogaAwareness = (
        <section>
            <div className="row">
                <div className="col-lg-6">
                    <h2>What Is Yoga?</h2>
                    <p>Originated from Ancient India, Yoga basically symbolises the union with reality. It's not restricted to a particular posture or an exercise or for that matter an ideology. It is referred to as the well being of physical, mental and spiritual aspects of one’s life. By practising yoga one can connect with their inner self.</p>

                    <h2>Physical Benefits</h2>
                    <p><ul>
                        <li>Improved Flexibility</li>
                        <li>Reduces Obesity</li>
                        <li>Efficient Metabolism</li>
                        <li>Maintains BMI</li>
                        <li>Prevents various pains</li>
                        <li>Helps in Injury healing</li>
                        <li>Improves respiratory rate</li>
                    </ul></p>

                </div>
                <div className="col-lg-6">
                    <img className="pictoImage" src={YogaImg} alt="yoga" />
                </div>
            </div>
        </section>
    );

    const benefits = (
        <section>
            <div className="row">
                <div className="col-lg-6">
                    <h2>Mental Benefits</h2>
                    <p>
                        <ul>
                            <li>Boosts Confidence</li>
                            <li>Reduces Stress</li>
                            <li>Mental Calmness</li>
                            <li>Creates Balance</li>
                            <li>Increases Self regulation and awareness</li>
                            <li>Relaxes the surroundings</li>
                        </ul>
                    </p>
                </div>
                
                <div className="col-lg-6">
                    <h2>Spiritual Benefits</h2>
                    <p><ul>
                        <li>Deep connection with Mind and Body</li>
                        <li>Exploration of creativity</li>
                        <li>Inner Peace</li>
                        <li>Spreads Positivity</li>
                        <li>Better Understanding</li>
                    </ul></p>
                </div>
            </div>
        </section>
    );

    return (
        <Layout
            title="Yoga"
            description=""
            className="container-fluid"
        >

            {yogaAwareness}
            {benefits}

        </Layout>
    );
};

export default Yoga;
