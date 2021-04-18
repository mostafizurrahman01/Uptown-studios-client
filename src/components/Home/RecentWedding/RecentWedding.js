import React, { useEffect, useState } from 'react';
import RecentWeddingDetails from '../RecentWeddingDetails/RecentWeddingDetails';


const RecentWedding = () => {

    const [weddingInfo, setWeddingInfo] = useState([]);

    useEffect( () => {
        fetch('http://localhost:7000/recentWeddingInfo')
        .then(res => res.json())
        .then(data => setWeddingInfo(data))
    }, [])

    return (
        <section className="weddings">
            <div className="container">
                <h5 className="text-center text-primary mb-5 mt-3">Recent Weddings</h5>
                 <div className="row">
                    {
                     weddingInfo.map(info =><RecentWeddingDetails key={info._id} info={info} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default RecentWedding;