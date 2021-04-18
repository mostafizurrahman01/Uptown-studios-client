import React, { useState } from 'react';
import weddingBg from '../../../images/weddingBg1.jpg';
import wBg2 from '../../../images/wBg2.jpg';
import wBg3 from '../../../images/wBg3.jpg';
import { Carousel } from 'react-bootstrap';
import './HeaderMain.css';

const HeaderMain = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <main >
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={weddingBg}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h5 className="caption">Wedding in Filzmoos Sam & Paul</h5>
                        <p className="p-caption">Wedding in Austria</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={wBg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h5 className="caption">Wedding at Chateau de Lacoste</h5>
                        <p className="p-caption">Wedding in France</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={wBg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h5 className="caption">Wedding at White Hall</h5>
                        <p className="p-caption">Wedding in Italy</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </main>
    );
};

export default HeaderMain;