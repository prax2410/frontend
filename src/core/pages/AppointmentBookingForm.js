import React from "react";
import Layout from "../Layout";
import "../../css/styles.css";

const AppointmentBookingForm = () => {

    const BookingForm = (
        <section className="bookingForm">
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
                        <label for="occupation">Phone Number</label><br />
                        <input type="number" name="phone number" id="phone number" />
                    </div>
                    <div class="field">
                        <label for="doctor">Doctor</label><br />
                        <select className="btn mr-2">
                            <option value="Dr.(Mrs.)Neha Salhotra">Dr.(Mrs.)Neha Salhotra</option>
                            <option value="Dr. Vipul Rastogi">Dr. Vipul Rastogi</option>
                            <option value="Dr. Sandeep Govil">Dr. Sandeep Govil</option>
                            <option value="Dr. Paresh Trivedi">Dr. Paresh Trivedi</option>
                        </select>
                    </div>
                    <div class="field">
                        <label for="message">Message</label><br />
                        <textarea name="message" id="message" rows="4"></textarea>
                    </div>
                </div>
                <ul className="registerBtn">
                    <li><input class="btn btn-primary btn-block rounded" type="submit" value="Register" /></li>
                </ul>

            </form>
        </section>
    );

    return (
        <Layout
            title="Appointment Booking Form"
            description="Fill This Form And We'll Get Back To You In 12 Hrs."
            className="container-fluid col-md-6 offset-md-3"
        >
            {BookingForm}
        </Layout>
    );
};

export default AppointmentBookingForm;
