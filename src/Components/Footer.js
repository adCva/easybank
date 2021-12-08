import React from 'react';
import Button from './Button';


function Footer() {
    const onClickMessage = () => {
        alert("This button does nothing.");
    };




    return (
        <div className="footer-container">
            <div className="footer-menu">

                {/* ===================  Logo and social media icons =================== */}
                <div className="footer-logo-social">
                    <img src="./images/logo-footer.svg" alt="Logo" />
                    <div className="footer-social-icons">
                        <a className="social-icon-btn" target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src="./images/icon-facebook.svg" alt="Facebook" /></a>
                        <a className="social-icon-btn" target="_blank" rel="noreferrer" href="https://www.youtube.com/"><img src="./images/icon-youtube.svg" alt="YouTube" /></a>
                        <a className="social-icon-btn" target="_blank" rel="noreferrer" href="https://twitter.com/"><img src="./images/icon-twitter.svg" alt="Twitter" /></a>
                        <a className="social-icon-btn" target="_blank" rel="noreferrer" href="https://www.pinterest.com/"><img src="./images/icon-pinterest.svg" alt="Pinterest" /></a>
                        <a className="social-icon-btn" target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img src="./images/icon-instagram.svg" alt="Instagram" /></a>
                    </div>
                </div>

                {/* ===================  Links =================== */}
                <div className="footer-links">
                    <div>
                        <button className="footer-link" onClick={onClickMessage}>About Us</button>
                        <button className="footer-link" onClick={onClickMessage}>Contact</button>
                        <button className="footer-link">Blog</button>
                    </div>
                    <div>
                        <button className="footer-link" onClick={onClickMessage}>Careers</button>
                        <button className="footer-link" onClick={onClickMessage}>Support</button>
                        <button className="footer-link" onClick={onClickMessage}>Privacy Policy</button>
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