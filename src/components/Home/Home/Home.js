import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import RecentWedding from '../RecentWedding/RecentWedding';
import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <RecentWedding></RecentWedding>
            <Service></Service>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;