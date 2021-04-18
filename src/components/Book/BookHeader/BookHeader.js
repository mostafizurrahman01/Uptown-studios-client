import React from 'react';
import photographer2 from '../../../images/photographer2.jpg'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookHeader = ({handleDateChange}) => {
   
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Book Date</h1>
                <br/>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>

            <div className="col-md-6">
                <img src={photographer2} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default BookHeader;