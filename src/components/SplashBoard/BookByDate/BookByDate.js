import React from 'react';
import BookDataList from '../BookDataList/BookDataList';

const BookByDate = ({books}) => {

    return (
        
        <div>
            <h2 className="text-brand text-center mb-5">Photographer info Order</h2>
            {
                books.length ?
                 <BookDataList books={books} ></BookDataList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default BookByDate;