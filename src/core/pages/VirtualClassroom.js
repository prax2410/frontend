import React from "react";
import Layout from "../Layout";
// Images import
import ClassroomImg1 from "../../images/EDUCATION-01.png";
import ClassroomImg2 from "../../images/vitualClassroomBenefits.jpeg";

const VirtualClassroom = () => {

    const whatIsVirtualClassroom = (
        <section>
            <h2>Virtual Classroom</h2>
            <div className="row">
                <div className="col-lg-6">
                    <p>Virtual classroom eliminates the physical contact and is being organised within cyberspace. It is a modernized approach of recreating a traditional classroom using the internet as a tool. It is one of the most strong and accessible pillars of E- learning.</p>
                    <p>In the present scenario, Virtual classrooms have the most promising outlook towards shaping the future with minimum cost involved.</p>
                </div>
                <div className="col-lg-6">
                    <img className="pictoImage" src={ClassroomImg1} alt="Education" />
                </div>
            </div>
        </section>
    );

    const list = [
        {
            head: 'Digitalisation of traditional learning',
            text: 'Virtual classrooms facilitates the tech aspect of education the most. A modernized way of learning.'
        },
        {
            head: 'Ease in accessibility',
            text: 'It completely eliminates the location as a barrier and is accessible to  much wider groups.'
        },
        {
            head: 'An archive of information',
            text: 'With a click all the relevant material can be downloaded and is easily accessible anytime hence it serves as an archive of information.'
        },
        {
            head: 'Cost effective',
            text: 'Eliminates the entire cost of all the physical resources beforehand.'
        },
        {
            head: 'Optimization of time',
            text: 'Virtual classrooms are not restricted to students only, any section be it working adults, a homemaker, anyone can utilize their time to the fullest and learn through it.'
        }
    ];

    const advantagesOfVirtualClassroom = (
        <section>
            <h2>Advantages of Virtual Classroom</h2>
            <div className="row">
                <div className="col-lg-6">
                    <ul>
                        {list.map(item => (
                            <li key={item.text}>
                                <p><strong>{item.head}</strong>:- {item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-6">
                    <img className="pictoImage" src={ClassroomImg2} alt="Education" />
                </div>
            </div>
        </section>
    );

    return (
        <Layout
            title="Virtual Classroom"
            description=""
            className="container-fluid"
        >
            {whatIsVirtualClassroom}
            {advantagesOfVirtualClassroom}



        </Layout>
    );
};

export default VirtualClassroom;