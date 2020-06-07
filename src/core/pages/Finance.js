import React from "react";
import Layout from "../Layout";
// Images import
import FinanceImg from "../../images/FINANCE-01.png";
import DhirajImg from "../../images/Dheeraj.png";

const Finance = () => {

    const DhirajKunwar = (
        <section>
            <div className="row">
                <div className="col-md-3 docDetails">
                    <img className="speakerImage" src={DhirajImg} alt="DocImage" />
                    <div className="docInfo">
                        <h5>Dhiraj Kunwar</h5><br />
                        <h6>MD, RAKBANK, DUBAI</h6><br />
                    </div>
                </div>
                <div className="col-md-5 docAboutWithoutBooking">
                    <p>A Banker with diverse leadership experience in Commercial/SME/Retail Banking across multiple geographies. He has led many greenfield Banking assignments and presided over BAU/Digital projects during his banking career in India and UAE. He currently heads one of the largest Business Bank in the GCC and is also a core member EXCO, ALCO, MRC of the Bank. He is a member of UBF -SME committee,which advises Central Bank on matters related to SMEs.</p>
                    
                    <p>Specialties: BFSI leadership,Corporate/SME Banking,SME regulations,Consulting,Change management, Design Thinking,Innovation,Start up mentoring, Guest lectures at B-Schools.</p>
                </div>
                <div className="col-md-4"></div>                
            </div>
        </section>
    );

    const financeAwareness = (
        <img className="pictoImage" src={FinanceImg} alt="Finance" />
    );

    return (
        <Layout
            title="Finance"
            description=""
            className="container-fluid"
        >

            {financeAwareness}
            <hr/>
            {DhirajKunwar}

        </Layout>
    );
};

export default Finance;
