import React, { useEffect, useState } from 'react';
import './Review.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const reviewData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
    }
]

const Review = () => {
    
    const [review,setReview] = useState([]);

    useEffect(()=>{
        fetch('https://quiet-chamber-19934.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h4 className="text-primary text-uppercase text-center mb-2">Review</h4>
                   <h3 className="mt-5">Let's Hear What's <br/> Their Opinion </h3>
               </div>
               <div className="card-group mt-5 ">
                    {
                        review.map(review => <ReviewDetails review={review} key={review.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Review;