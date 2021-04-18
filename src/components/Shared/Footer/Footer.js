import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faYoutube } from '@fortawesome/free-brands-svg-icons';
import FooterDetails from '../FooterDetails/FooterDetails';

const Footer = () => {
    const ourAddress = [
        {name: "New York - 560 San Pablo St.Woodside" , link: "//google.com/map"},
        {name: "U.K - 36 East Street" , link: "//google.com/map"},
       
    ]
    const socialinfo = [
        {name: "Facebook" , link: "//facebook.com"},
        {name: "Instagram" , link: "//instagram.com"},
        {name: "Google" , link: "//google.com"},
        {name: "Youtube" , link: "//youtube.com"}
    ]
    const findYourWayAround = [
        {name: "Home" , link: "/home"},
        {name: "About" , link: "/about"},
        {name: "Information" , link: "/information"},
        {name: "Blogs" , link: "/blog"},
        {name: "Contact Us" , link: "/contact"},
        {name: "Admin" , link: "/admin"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row  py-5">
                    <FooterDetails key={2} menuTitle="Find Your Way Around" menuItems={findYourWayAround}/>
                    <FooterDetails key={3} menuTitle="Our Address" menuItems={ourAddress}/> 
                    <FooterDetails key={4} menuTitle="Connect With Us via" menuItems={socialinfo}>
                   
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="//youtube.com"><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>
                        </ul>
                        <div className="mt-2">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterDetails>
                    
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;