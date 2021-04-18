import React from 'react';

const BookDataList= ({books}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  books.map((book, index) => 
                        
                    <tr>
                        <td>{book.name}</td>
                        <td>{book.phone}</td>
                        <td>{book.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default BookDataList;