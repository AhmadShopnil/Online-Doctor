import React from 'react';

const TestimonialCard = ({ review }) => {

    const { name, photo, text, address } = review



    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{text}</p>
                <div className="card-actions justify-start mt-2">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={photo} />
                        </div>
                    </div>

                    <div className='my-auto'>
                        <h3 className='font-semibold text-2xl'>{name}</h3>
                        <h5 className='font-medium' >{address}</h5>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default TestimonialCard;