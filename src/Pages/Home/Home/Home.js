import React from 'react';
import Info from '../Info/Info';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';
import Appointment from '../Appointment/Appointment';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='mx-6'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;