import React, { useEffect, useState } from 'react';
import OrderDataTable from '../OrderDataTable/OrderDataTable';


const AllOrderList = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/getBook')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])

    return (
        <div className="order-container">

            <OrderDataTable orders={orders}></OrderDataTable>
        </div>
    );
};

export default AllOrderList;
