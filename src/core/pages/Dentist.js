import React from "react";
import Layout from "../Layout";
// Images import
import DentalImg from "../../images/DENTIST-01.png";

const Dentist = () => {

    const dentalCare = (
        <section>
            <div className="row">
                <div className="col-lg-6">
                    <h2>Dentistry</h2>
                    <p>Dentistry is the study of diagnosis, treatment, and prevention of all the diseases that take place within the parameter of Oral Hygiene.<br /><strong>Never take a matter in your hands when it comes to your Teeth. Let Dentists fight your cavities and all oral health problems.</strong></p>
                </div>

                <div className="col-lg-6">
                    <img className="pictoImage" src={DentalImg} alt="DentalCare" />
                </div>
            </div>
        </section>
    );

    const list1 = [
        {
            text: 'In order to keep Teeth white and healthy.'
        },
        {
            text: 'Not maintaining the proper Oral Hygiene can lead on to many other diseases.'
        },
        {
            text: 'To avoid any costly procedures to be performed on teeth when flossing and properly brushing can take care of that.'
        },
        {
            text: 'Floats overall positivity'
        }
    ];

    const whyDentalCareIsImportant = (
        <section>
            <div className="row">
                <h2>Why Is Dental Care Important?</h2>
                <div className="col-md-12">
                    <ul>
                        {list1.map(item => (
                            <li key={item.text}>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );

    const list2 = [
        {
            text: 'Bad breath'
        },
        {
            text: 'Tooth staining'
        },
        {
            text: 'Gum disease'
        },
        {
            text: 'Inflammation of salivary gland openings on the roof of the mouth'
        },
        {
            text: 'Increase buildup of plaque and calculus'
        },
        {
            text: 'Loss of bone within the jaw'
        },
        {
            text: 'Increased risk of leukoplakia (white patches within the mouth; a precancerous lesion)'
        },
        {
            text: 'Delayed healing process'
        },
        {
            text: 'Increased risk of developing oral cancer'
        }
    ];

    const smokingAffectsOralHealth = (
        <section>
            <div className="row">
                <h2>How does smoking affect one's oral health ?</h2>
                <div className="col-md-12">
                    <ul>
                        {list2.map(item => (
                            <li key={item.text}>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );

    return (
        <Layout
            title="Dentist"
            description=""
            className="container-fluid"
        >
            {dentalCare}
            {whyDentalCareIsImportant}
            {smokingAffectsOralHealth}

        </Layout>
    );
};

export default Dentist;
