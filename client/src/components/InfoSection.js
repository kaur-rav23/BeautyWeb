import React from "react";
import "./InfoSection.css";

const InfoSection = () => {
    return (
        <div className="info-section">
            <div className="info-card">
                <img src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247950_secure-payment.jpg" alt="Secure Payments" className="info-icon" />
                <h3>100% Secure Payments</h3>
                <p>All major credit & debit cards accepted.</p>
            </div>

            <div className="info-card">
                <img src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247975_beauty-assistant.jpg" alt="Beauty Assistant" className="info-icon" />
                <h3>Beauty Assistant</h3>
                <p>
                    Tell me what you are looking for and I will work my magic to
                    help you find your perfect match.
                </p>
            </div>

            <div className="info-card">
                <img src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247997_help-center.jpg" alt="Help Center" className="info-icon" />
                <h3>Help Center</h3>
                <p>
                    Got a question? Look no further. Browse FAQs or submit
                    your query.
                </p>
            </div>
        </div>
    );
};

export default InfoSection;
