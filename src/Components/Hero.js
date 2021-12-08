import React, { useState } from 'react';
import Button from './Button';

function Hero() {
    const [ biggerScreen, setBiggerScreen ] = useState(true);
    return (
        <div className="hero-wrapper">
            <div className="hero-container">
                <div className="hero-images">
                    <img src="./images/image-mockups.png" alt="Mockup" className="special-image" />
                </div>
                <div className="hero-text">
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Hero
