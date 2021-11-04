import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import ExeptionalDentalCare from '../ExeptionalDentalCare/ExeptionalDentalCare';
import OurBlog from '../OurBlog/OurBlog';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ExeptionalDentalCare></ExeptionalDentalCare>
            <AppointmentBanner></AppointmentBanner>
            <Testimonials></Testimonials>
            <OurBlog></OurBlog>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;