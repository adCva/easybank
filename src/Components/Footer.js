import React from 'react';
import Button from './Button';


function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-menu">

                {/* ===================  Logo and social media icons =================== */}
                <div className="footer-logo-social">
                    <img src="./images/logo-footer.svg" alt="Logo" />
                    <div className="footer-social-icons">
                        <button className="social-icon-btn"><img src="./images/icon-facebook.svg" alt="Facebook" /></button>
                        <button className="social-icon-btn"><img src="./images/icon-youtube.svg" alt="YouTube" /></button>
                        <button className="social-icon-btn"><img src="./images/icon-twitter.svg" alt="Twitter" /></button>
                        <button className="social-icon-btn"><img src="./images/icon-pinterest.svg" alt="Pinterest" /></button>
                        <button className="social-icon-btn"><img src="./images/icon-instagram.svg" alt="Instagram" /></button>
                    </div>
                </div>

                {/* ===================  Links =================== */}
                <div className="footer-links">
                    <div>
                        <button className="footer-link">About Us</button>
                        <button className="footer-link">Contact</button>
                        <button className="footer-link">Blog</button>
                    </div>
                    <div>
                        <button className="footer-link">Careers</button>
                        <button className="footer-link">Support</button>
                        <button className="footer-link">Privacy Policy</button>
                    </div>
                </div>
            </div>

            {/* ===================  Do androids dream of electric sheep? =================== */}
            <div className="footer-btn">
                <Button />
                <p>© Easybank. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;