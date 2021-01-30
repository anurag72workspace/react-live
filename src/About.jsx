import React from 'react';
import Common from './Common';

const abouthead = "https://www.mobinius.com/wp-content/uploads/2020/02/contact-us-banner-img.svg";

const About = () =>{
    return (
       <Common 
       name="Welcome to About page" 
       imgscr={abouthead}
       visit="/contact"
       btnname="Contact Now"
        />
    );
};
export default About;
