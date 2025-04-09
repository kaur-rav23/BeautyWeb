import React from "react";
import "./Contact.css";
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    const handleSend = (e) => {
        e.preventDefault();
        alert('Message sent successfully');
        navigate('/');
    };

    return (
        <div className="contact-container">
            <div className="contact-card">
                <div className="contact-left">
                    <h2>Contact Us</h2>
                    <p>📍 23, Avenue de Paris 75012 Paris</p>
                    <p>📧 hello@mikechemardin.com</p>
                    <p>👤 mike.chemardin</p>
                    <p>📞 +33 619 530 144</p>
                </div>
                <div className="contact-right">
                    <h2>Get in Touch</h2>
                    <p>Feel free to drop us a line below!</p>
                    <form onSubmit={handleSend}>
                        <input type="text" placeholder="Your name" required />
                        <input type="email" placeholder="Your email" required />
                        <textarea placeholder="Type your message here..." rows="4" required></textarea>
                        <button type="submit">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
