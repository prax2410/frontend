import React from "react";
import Layout from "../Layout";
import "../../css/styles.css";
// Images import
import MentalHealthImage from "../../images/MENTAL HEALTH-01.png";
import MentalHealthImage2 from "../../images/MENTAL HEALTH-02.png";

const MentalHealth = () => {

    const whatIsMentalHealth = (
        <section>
            <div className="row">
                <div className="col-lg-6">
                    <h2>What Is Mental Health?</h2>
                    <p>Mental health basically means maintaing a balance of emotional and social well being and at the same time efforting towards psychological resilience.</p>

                    <p>According to WHO “Mental health is a state of well-being in which an individual realises his/her own abilities, can cope with the normal stresses of life, can work productively, and is able to make a contribution to his or her community".</p>
                </div>
                <div className="col-lg-6">
                    <img className="pictoImage" src={MentalHealthImage} alt="Mental health" />
                </div>
            </div>
        </section>
    );

    const importanceMentalHealth = (
        <section>
            <h2>Why Mental Health Awareness Is Important?</h2>
            <div className="row">
                <p>Mental Health needs to be addressed as vividly as physical health.</p>
                <p>When it comes to mental one should never abide by the approach "This too shall pass".</p>
                <p>There is a sustainable and a strong correlation between physical health and mental health. If you are a fan of Vice Versa just give next two lines a microscopic attention:</p>
                <p>1. People with serious mental health conditions are at a high risk of experiencing chronic physical conditions.</p>
                <p>2. People with chronic physical conditions are at a risk of developing poor health.</p>
            </div>
        </section>
    );

    const list = [
        {
            text: 'Around 1 in 5 of the world\'s children and adolescents have a mental disorder.'
        },
        {
            text: 'Depression is one of the leading causes of disability, affecting 264 million people.'
        },
        {
            text: 'About half of mental disorders begin before the age of 14.'
        },
        {
            text: 'Almost 800 000 people die by suicide every year; 1 person dies from suicide every 40 seconds. Suicide is the second leading cause of death in individuals aged 15-29 years.'
        },
        {
            text: 'Rates of mental health workers vary from below 2 per 100 000 population in low-income countries to over 70 per 100 000 in high-income countries.'
        },
        {
            text: 'Less than half of the 139 countries that have mental health policies and plans report having these aligned with human rights conventions.'
        },
        {
            text: 'The global economy loses about US$ 1 trillion per year in productivity due to depression and anxiety.'
        }
    ];

    const whoFacts = (
        <section>
            <h2>WHO Facts regarding mental Illness (2nd Oct, 2019)</h2>
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
                    <img className="pictoImage" src={MentalHealthImage2} alt="Mental health" />
                </div>
            </div>
        </section>
    );

    return (
        <Layout
            title="Mental Health"
            description=""
            className="container-fluid"
        >
            {whatIsMentalHealth}
            {importanceMentalHealth}
            {whoFacts}

        </Layout>
    );
};

export default MentalHealth;
