import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import BookByDate from '../BookByDate/BookByDate';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const SplashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [books, setBooks] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://quiet-chamber-19934.herokuapp.com/booksBydate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({date: selectedDate, email:loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => {
                setBooks(data)
            })
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="div container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <BookByDate books={books}></BookByDate>
                </div>
            </div>
        </section>
    );
};

export default SplashBoard;