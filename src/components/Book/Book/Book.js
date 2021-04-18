import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import BookHeader from '../BookHeader/BookHeader';
import BookService from '../BookService/BookService';



const Book = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        // console.log(date);
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <BookHeader handleDateChange={handleDateChange}></BookHeader>
            <BookService date={selectedDate}></BookService>
            <Footer></Footer>
        </div>
    );
};

export default Book;