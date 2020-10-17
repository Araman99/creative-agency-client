import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div className="home-container">
            <Header/>
            <Services/>
            <Works/>
            <Feedback/>
            <Footer/>  
        </div>
    );
};

export default Home;    