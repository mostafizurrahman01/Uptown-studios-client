import React, { useEffect, useState } from 'react';
import ServiceDataTable from '../ServiceDataTable/ServiceDataTable';

const AllServiceList = () => {
    const [serviceList,setServiceList] = useState([]);

    useEffect(() => {
        fetch('https://quiet-chamber-19934.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServiceList(data))
    },[])
    return (
        <div className="order-container">

            <ServiceDataTable serviceList={serviceList}/>
        </div>
    );
};

export default AllServiceList;


