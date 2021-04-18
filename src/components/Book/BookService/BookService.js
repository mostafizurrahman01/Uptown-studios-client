import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';


const serviceInformation = [
    {
        _id: '5e8df50be6e8231764dc83de',
        id: 1,
        img: 'https://i.ibb.co/dBnNDvg/blond-model-wedding-dress-bridal-makeup.png',
        subject: 'Photography coverage on the day',
        timePerDay: '6 hours',
        price: '$150'

    },
    {
        _id: '5e8df578e6e8231785dc23df',
        id: 2,
        img: 'https://i.ibb.co/L0N5ydj/The-bridegroom-prepares-for-her-wedding.jpg',
        subject: 'A second photographer',
        timePerDay: '3 hours',
        price: '$100'

    },
    {
        _id: '5e8df5aee6e82981764dc23e0',
        id: 3,
        img: 'https://i.ibb.co/Vg84TcS/bride-groom-walk.png"',
        subject: 'A pre-wedding photo session',
        timePerDay: '5 hours',
        price: '$120'

    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        img: 'https://i.ibb.co/t29v965/Young-businessman-in-blue-suit.jpg',
        subject: 'An online Gallery',
        timePerDay: '2 hours',
        price: '$80'

    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        img: 'https://i.ibb.co/qMTtpHq/Young-happy-beautiful-bride-in-white-elegant-wedding-dress-with-bouquet-posing-outdoor-in-park-Fashi.jpg',
        subject: 'A video with the best photos',
        timePerDay: '3 hours',
        price: '$100'

    }
]


const BookService = ({ date }) => {

    const [serviceInfo, setServiceInfo] = useState([]);

    useEffect(() => {
        fetch('https://quiet-chamber-19934.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServiceInfo(data))
    }, [])

    return (
        <section>
            <h2 className="text-center text-brand mb-5">Available Photographer on {date.toDateString()}</h2>
            <div className="card-group">
                {
                   serviceInfo.map(information => <ServiceCard information={information} date={date} key={information.id}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default BookService;