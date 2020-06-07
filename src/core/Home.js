// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Layout from "./Layout";
// import { getCategories } from "./apiCore";
// import Card from "./Card";
import Search from "./Search";
import "../css/styles.css";
// Carousel
import Carousel1 from "../images/CarouselUpdate1.jpeg";
import Carousel2 from "../images/CarouselUpdate2.jpeg";
// Upcoming Speakers
import Speaker1 from "../images/prakhar.jpg";
import DrNehaImg from "../images/Dr_Neha.png";
import DhirajKunwar from "../images/Dheeraj.png";
import NishantImg from "../images/NishantSahil.png";
import DrVipulImg from "../images/Dr_Vipul.png";
import DrSandeepImg from "../images/Dr_Sandeep.png";
import DrPareshImg from "../images/Dr_Paresh.png";
import DrVishalImg from "../images/Dr_Vishal.png";

const Home = () => {

    const carouselItems = (
        <section>
            <div id="carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Carousel1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img src={Carousel2} alt="Second slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>
    );

    const upcomingSpeakers = (
        <section class="upcoming-speakers">
            <h3 class="upcoming-title">Upcoming Speakers</h3>
            <div class="row">
                <div class="speakers col-lg-3 col-md-6">
                    <img class="speaker-img" src={DrNehaImg} alt="Speaker1" />
                    <h3>Dr.(Mrs.)Neha Salhotra</h3>
                    <p>MBBS, DNB (Psychiatry)</p>
                    <hr />
                    <p>Date: 14/6/2020</p>
                </div>
                <div class="speakers col-lg-3 col-md-6">
                    <img src={DhirajKunwar} alt="DhirajKunwar" />
                    <h3>Dhiraj Kunwar</h3>
                    <p>MD, RAKBANK, DUBAI</p>
                    <hr />
                    <p>COMING SOON...</p>
                    {/* <p>Date: 15/5/2020</p> */}
                </div>
                <div class="speakers col-lg-3 col-md-6">
                    <img className="speakerImage" src={NishantImg} alt="NishantSahil" />
                    <h3>Nishant Sahil</h3>
                    <p>GM - Sales, Food and Beverages, Institutional and Exports Biz (India, Middle East, APAC, AFRICA, SAARC)</p>
                    <hr />
                    <p>COMING SOON...</p>
                    {/* <p>Date: 15/5/2020</p> */}
                </div>
                <div class="speakers col-lg-3 col-md-6">
                    <img src={DrVipulImg} alt="DoctorImg" />
                    <h3>Dr. Vipul Rastogi</h3>
                    <p>M.Sc (Clinical Neurology)</p>
                    <hr />
                    <p>Date: 21/6/2020</p>
                </div>
            </div>

            <div class="row">
                <div class="speakers col-lg-3 col-md-6">
                    <img class="speaker-img" src={DrSandeepImg} alt="DoctorImg" />
                    <h3>Dr. Sandeep Govil</h3>
                    <p>M.B.B.S and a Philanthropist</p>
                    <hr />
                    <p>Date: 28/6/2020</p>
                </div>
                <div class="speakers col-lg-3 col-md-6">
                    <img src={DrPareshImg} alt="DoctorImg" />
                    <h3>Dr. Paresh Trivedi</h3>
                    <p>Psychiatrist and Sexologist</p>
                    <hr />
                    <p>Date: 5/7/2020</p>
                </div>
                <div class="speakers col-lg-3 col-md-6">
                    <img className="speakerImage" src={DrVishalImg} alt="DoctorImg" />
                    <h3>Dr. Vishal Sawant</h3>
                    <p></p>
                    <hr />
                    <p>COMING SOON...</p>
                    {/* <p>Date: 15/5/2020</p> */}
                </div>
                <div class="speakers col-lg-3 col-md-6">
                    {/* <img src={DrVipulImg} alt="Speaker4" />
                    <h3>Dr. Vipul Rastogi</h3>
                    <p>M.Sc (Clinical Neurology)</p>
                    <hr />
                    <p>Date: 21/6/2020</p> */}
                </div>
            </div>
        </section>
    );

    const contactUs = (
        <section id="footer">
            <div class="inner">
                <h2 class="major">Get in touch</h2><hr />
                {/* add para if any */}
                <form action="mailto:info@tickettoyournetwork.com" method="post" enctype="text/plain">
                    <div class="fields">
                        <div class="field">
                            <label for="name">Name</label><br />
                            <input type="text" name="name" id="name" />
                        </div>
                        <div class="field">
                            <label for="email">Email</label><br />
                            <input type="email" name="email" id="email" />
                        </div>
                        <div class="field">
                            <label for="occupation">Occupation</label><br />
                            <input type="text" name="occupation" id="occupation" />
                        </div>
                        <div class="field">
                            <label for="message">Message</label><br />
                            <textarea name="message" id="message" rows="4"></textarea>
                        </div>
                    </div>
                    <ul class="actions">
                        <li><input class="btn btn-secondary rounded" type="submit" value="Subscribe to Our Newsletter" /></li>
                    </ul>
                </form>
                <ul class="contact">
                    <li><SocialIcon url="mailto: info@tickettoyournetwork.com" /> For Any Inquiry</li>
                    <li><SocialIcon url="https://instagram.com/tickettoyournetwork?igshid=1is68p6netf9k" /> Instagram</li>
                    <li><SocialIcon url="https://www.facebook.com/tickettoyournetwork/?eid=ARBnx4YTaTs8PQ0_19F7r9_lu-erIlgKQgZpK0rzbLwdbG4EGDOB9kmBov8etlBpbBog0Madm78l7VB-" /> Facebook</li>
                    <li><SocialIcon url="https://twitter.com/tickettoyourne1" /> Twitter</li>
                    <li><SocialIcon url="mailto: marketing@tickettoyournetwork.com" /> For Business</li>
                </ul>
            </div>
        </section>
    );

    return (
        <Layout
            title="Ticket To Your Network"
            description="Aligning What's Already Built!"
            className="container-fluid"
        >

            <Search />

            {/* Carousel Items */}
            {carouselItems}

            {/* Upcoming Speakers */}
            {upcomingSpeakers}

            {/* Contact us */}
            {contactUs}

            {/* --------------------------------------------------------- 
            <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>

            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div> 
---------------------------------------------------------*/}
        </Layout>
    );
};

export default Home;
