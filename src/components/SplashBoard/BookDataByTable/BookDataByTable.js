import React from 'react';

const BookDataByTable = ({books}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Gender</th>
                <th className="text-secondary" scope="col">Age</th>
                <th className="text-secondary" scope="col">Weight</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  books.map((book, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{book.name}</td>
                        <td>{book.gender}</td>
                        <td>{book.age}</td>
                        <td>{book.weight}KG</td>
                        <td>{book.phone}</td>
                        <td>{book.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default BookDataByTable;