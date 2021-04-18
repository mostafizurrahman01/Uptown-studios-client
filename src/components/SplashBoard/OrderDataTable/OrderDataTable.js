import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const OrderDataTable = ( {orders} ) => {

    return (
        <section>
            <div style={containerStyle} className="div container-fluid row">
                <div className="col-md-3 col-sm-2 ">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 col-sm-10 modify form-modify">
                    <h1>Book List</h1>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className="text-secondary text-left" scope="col">Sr No</th>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email</th>
                                <th className="text-secondary" scope="col">Service</th>
                                <th className="text-secondary" scope="col">Pay With</th>
                                <th className="text-secondary" scope="col">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) =>

                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.serviceName}</td>
                                        <td>credit card</td>
                                        <td className=" text-primary">Done</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

    );
};

export default OrderDataTable;