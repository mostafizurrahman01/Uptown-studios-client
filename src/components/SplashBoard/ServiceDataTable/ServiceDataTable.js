import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const ServiceDataTable = ( {serviceList} ) => {

    return (
        <section>
            <div style={containerStyle} className="div container-fluid row">
                <div className="col-md-3 col-sm-2 ">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 col-sm-10 modify form-modify">
                    <h1>Service List</h1>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className="text-secondary text-left" scope="col">Sr No</th>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Time Limit</th>
                                <th className="text-secondary" scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                serviceList.map((service, index) =>

                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{service.title}</td>
                                        <td>{service.timePerDay}</td>
                                        <td>{service.price}</td>
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

export default ServiceDataTable;