import React, { useEffect, useState } from 'react';
import OrderDataTable from '../OrderDataTable/OrderDataTable';


const AllOrderList = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://quiet-chamber-19934.herokuapp.com/getBook')
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
