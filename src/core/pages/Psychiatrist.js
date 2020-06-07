import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import "../../css/styles.css";
// Images import
import PsyImg from "../../images/PSY-01.png";
import DrNehaImg from "../../images/Dr_Neha.png";
import DrVipulImg from "../../images/Dr_Vipul.png";
import DrSandeepImg from "../../images/Dr_Sandeep.png";
import DrPareshImg from "../../images/Dr_Paresh.png";
import DrVishalImg from "../../images/Dr_Vishal.png";

const Psychiatrist = () => {

    const psychiatristConsultation = (
        <div className="row">
            <div className="col-md-6">
                <h4>Psychiatry</h4>
                <p>Psychiatry is basically the medical study that is related to the mental health of a person. It includes the diagnosis, treatment and prevention of any mental disorders.</p>

                <h4>Psychiatrist</h4>
                <p>A psychiatrist is a medical doctor specializing and having an expertise in mental health. They have a deep rooted understanding of one’s mental as well as physical health and how they are correlated. </p>

                <h4>Common Scenarios when people require the help of a Psychiatrist</h4>
                <ul>
                    <p><li>Anxiety Issues</li></p>
                    <p><li>Depression</li></p>
                    <p><li>Hallucinations</li></p>
                    <p><li>Suicidal Disorder</li></p>
                    <p><li>Memory Issues</li></p>
                    <p><li>Uneasy Past Experiences</li></p>
                    <p><li>Hyperactivity</li></p>
                    <p><li>Delusion</li></p>
                </ul>
            </div>
            <div className="col-md-6">
                <img className="pictoImage" src={PsyImg} alt="Psychiatrist" />
            </div>
        </div>
    );

    const Dr_NehaSalhotra = (
        <section>
            <div className="row">
                <div className="col-md-3 docDetails">
                    <img className="docImage" src={DrNehaImg} alt="DocImage" />
                    <div className="docInfo">
                        <h5>Dr.(Mrs.)Neha Salhotra</h5><br />
                        <h6>MBBS, DNB (Psychiatry)</h6><br />
                    </div>
                </div>
                <div className="col-md-5 docAbout">
                    <p>
                        <ul>
                            <li><strong>Topic:</strong> Balancing Work life with positive Mental Health.</li>
                            <li>8 Years of Experience</li>
                            <li>Date: 14/6/2020</li>
                            <li><strong>Description: </strong>She is a well known and commited Psychiatrist in Delhi. Having an experience of over 8 as a practicing psychiatrist, she is currently associated with R.S Child and Skin Care and Mental Well-being Centre in Delhi.</li>
                        </ul>
                    </p>
                </div>
                <div className="col-md-4 btnContainer">
                    <Link to="/appointmentBookingForm">
                        <button className="btn btn-info rounded">
                            Book Your Appointment Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );

    const Dr_VipulRastogi = (
        <section>
            <div className="row">
                <div className="col-md-3 docDetails">
                    <img className="docImage" src={DrVipulImg} alt="DocImage" />
                    <div className="docInfo">
                        <h5>Dr. Vipul Rastogi</h5><br />
                        <h6>M.Sc (Clinical Neurology)</h6><br />
                    </div>
                </div>
                <div className="col-md-5 docAbout">
                    <p>
                        <ul>
                            <li><strong>Topic:</strong> Sleep Disorders - So simple yet so complex!</li>
                            <li>17 Years of Experience</li>
                            <li>Date: 21/6/2020</li>
                            <li><strong>Description: </strong>A consultant in behavioral neurology and psychiatry. Dr. Vipul Rastogi is associated with Medanta Clinic in Gurgaon. He has his own Clinic too by the name Gurgaon Multispeciality Clinic. Dr Rastogi has undergone a formal and extensive training in Neurology plus he is having a M.Sc degree in Clinical Neurology from one of the Premium Neurology Institute in the World Queen Square, London. Along with this, he also has a PG Diploma in Neuropsychiatry from the University of Birmingham, UK and a Diploma in Clinical Psychiatry from the Republic of Ireland.</li>
                        </ul>
                    </p>
                </div>
                <div className="col-md-4 btnContainer">
                    <Link to="/appointmentBookingForm">
                        <button className="btn btn-info rounded">
                            Book Your Appointment Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );

    const Dr_SandeepGovil = (
        <section>
            <div className="row">
                <div className="col-md-3 docDetails">
                    <img className="docImage" src={DrSandeepImg} alt="DocImage" />
                    <div className="docInfo">
                        <h5>Dr. Sandeep Govil</h5><br />
                        <h6>M.B.B.S and a Philanthropist</h6><br />
                    </div>
                </div>
                <div className="col-md-5 docAbout">
                    <p>
                        <ul>
                            <li><strong>Topic:</strong> Obsessive-compulsive disorder</li>
                            <li>20 Years of Experience</li>
                            <li>Date: 28/6/2020</li>
                            <li><strong>Description: </strong>Dr. Govil is a M.B.B.S and a Philanthropist, currently practicing as a Consultant Psychiatry in Yashoda Super Specialty Hospital, Kaushambi Ghaziabad. He has done his Post Graduation from a World Renowned Institute IHBAS (Institute Of Human Behavior and Allied Sciences). His Key Areas include Schizophrenia and Bipolar disorder. He is very active as a Community Psychiatrist. He is also a Celebrated Author of the Book "Psychiatry Made Easy".</li>
                        </ul>
                    </p>
                </div>
                <div className="col-md-4 btnContainer">
                    <Link to="/appointmentBookingForm">
                        <button className="btn btn-info rounded">
                            Book Your Appointment Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );

    const Dr_PareshTrivedi = (
        <section>
            <div className="row">
                <div className="col-md-3 docDetails">
                    <img className="docImage" src={DrPareshImg} alt="DocImage" />
                    <div className="docInfo">
                        <h5>Dr. Paresh Trivedi</h5><br />
                        <h6>Psychiatrist and Sexologist</h6><br />
                    </div>
                </div>
                <div className="col-md-5 docAbout">
                    <p>
                        <ul>
                            <li><strong>Topic:</strong> Coping with the stress of Current/Post COVID 19 Pandemic.</li>
                            <li>22 Years of Experience</li>
                            <li>Date: 5/7/2020</li>
                            <li><strong>Description: </strong>Dr. Trivedi has an experience of 22 years as a Psychiatrist and Sexologist and is currently practicing in Andheri West, Mumbai at Chaitanya Mind care Center. He is also associated with Aastha Nursing Home and Sai Baba Hospital in Mumbai.  He completed MBBS from KIMS, Karad in 1992, and is an avid member at American Psychiatric Association, Indian Psychiatric Society, Bombay Psychiatric Society, Indian Medical Association (IMA) and Association of Medical Consultants. His key areas include Stress, Anxiety, Somatic Disorders, Depression, Child and Adolescent Problems.</li>
                        </ul>
                    </p>
                </div>
                <div className="col-md-4 btnContainer">
                    <Link to="/appointmentBookingForm">
                        <button className="btn btn-info rounded">
                            Book Your Appointment Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );

    const Dr_VishalSawant = (
        <section>
            <div className="row">
                <div className="col-md-3 docDetails">
                    <img className="docImage" src={DrVishalImg} alt="DocImage" />
                    <div className="docInfo">
                        <h5>Dr. Vishal Sawant</h5><br />
                        <h6>COMING SOON...</h6><br />
                    </div>
                </div>
                <div className="col-md-5 docAbout">
                    {/* <p>
                        <ul>
                            <li><strong>Topic:</strong> Balancing Work life with positive Mental Health.</li>
                            <li>8 Years of Experience</li>
                            <li>Date: 14/6/2020</li>
                            <li><strong>Description: </strong>She is a well known and commited Psychiatrist in Delhi. Having an experience of over 8 as a practicing psychiatrist, she is currently associated with R.S Child and Skin Care and Mental Well-being Centre in Delhi.</li>
                        </ul>
                        </p> */}
                </div>
                <div className="col-md-4 btnContainer">
                    {/* <Link to="/appointmentBookingForm">
                        <button className="btn btn-info rounded">
                            Book Your Appointment Now
                        </button>
                    </Link> */}
                </div>
            </div>
        </section>
    );

    return (
        <Layout
            title="Psychiatrist"
            description=""
            className="container-fluid"
        >
            {psychiatristConsultation}
            <hr />
            {Dr_NehaSalhotra}<hr />
            {Dr_VipulRastogi}<hr />
            {Dr_SandeepGovil}<hr />
            {Dr_PareshTrivedi}<hr />
            {Dr_VishalSawant}<hr />

        </Layout>
    );
};

export default Psychiatrist;
