import React from 'react';
import AboutCard from './AboutCard';

function About() {
    return (
        <div className="about-wrapper">
            <div className="about-container">
                <h2>Why choose Easybank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                <div className="about-card-container">
                    <AboutCard cardLogo="icon-online.svg" cardAlt="Online Banking" cardTitle="Online Banking" cardDescription="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."/>
                    <AboutCard cardLogo="icon-budgeting.svg" cardAlt="Budgeting" cardTitle="Simple Budgeting" cardDescription="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."/>
                    <AboutCard cardLogo="icon-onboarding.svg" cardAlt="Onboarding" cardTitle="Fast Onboarding" cardDescription="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."/>
                    <AboutCard cardLogo="icon-api.svg" cardAlt="Open API" cardTitle="Open API" cardDescription="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."/>
                </div>
            </div>
        </div>
    )
}

export default About;