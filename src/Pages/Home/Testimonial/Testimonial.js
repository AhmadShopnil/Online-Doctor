import React from 'react';
import img1 from '../../../assets/images/people1.png'
import img2 from '../../../assets/images/people2.png'
import img3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {

    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            address: 'Tangail',
            photo: img1,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }, {
            id: 3,
            name: 'Winson Herry',
            address: 'Dhaka',
            photo: img2,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 3,
            name: 'Winson Herry',
            address: 'Dhaka',
            photo: img3,
            text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }


    ]

    return (
        <div>
            <h2 className='text-xl font-bold text-secondary'>Testimonial</h2>
            <h1 className='text-4xl font-normal'>What Our Patients Says</h1>
            <div className='mt-16 grid lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <TestimonialCard key={review.id} review={review}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;