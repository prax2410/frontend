import React from "react";
import Layout from "../Layout";

// Images import
import ChildCareImg from "../../images/CHILD CARE-01.png";

const ChildCare = () => {

    const childCare = (
        <section>
            <div className="row">
                <div className="col-lg-6">
                    <h2>Pediatrician</h2>
                    <p>When it comes to a child's health we only have one word in our mind, Pediatrician. A medical professional who handles physical as well as mental health of a child.</p>

                    <h2>In a Child’s Life - Importance of Pediatrician :</h2>
                    <p>
                        <ul>
                            <li>Every child requires special care right from the birth, Pediatricians having an expertise in the same are the most trusted when it comes to child’s health.</li>
                            <li>Pediatricians can detect the problems related to a child’s health at an early stage and provide the correct diagnosis and treatment.</li>
                            <li>They ensure the healthy physical and mental growth of a child.</li>
                        </ul>
                    </p>
                </div>

                <div className="col-lg-6">
                    <img className="pictoImage" src={ChildCareImg} alt="Child Care" />
                </div>
            </div>
        </section>
    );

    const consultingPediatrician = (
        <section>
            <div className="row">
                <h2>Age specifications regarding consulting a Pediatrician</h2>
                <p>Pediatricians can examine a child’s health from birth till he / she reaches their adolescent years. It is often advisable then when an individual attains the age of 18 they should start consulting a regular Physicians or medical health experts.</p>

                <h2>Some statistic related to Pediatricians in India</h2>
                <p><strong>Source - Indian Express</strong> As per the standard norm of one paediatrician for every 10,000 population, India should have 1.21 lakh practising paediatricians. The Indian Academy of Paediatrics (IAP), the second largest association of paediatricians in the world after the US association, has around 23,000 members. “There is a shortage of paediatricians all across the country, though the situation is better in bigger cities and also in the middle-tier ones.</p>
            </div>
        </section>
    );

    return (
        <Layout
            title="Child Care"
            description=""
            className="container-fluid"
        >
            {childCare}
            {consultingPediatrician}

        </Layout>
    );
};

export default ChildCare;
