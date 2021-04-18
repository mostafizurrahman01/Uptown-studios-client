import React, { useEffect, useState } from 'react';
import BookDataByTable from '../SplashBoard/BookDataByTable/BookDataByTable';
import Sidebar from '../SplashBoard/Sidebar/Sidebar';

const AllBookings = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://quiet-chamber-19934.herokuapp.com/addPhotographerBook')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <BookDataByTable books={books} />
            </div>
        </div>
    );
};

export default AllBookings;