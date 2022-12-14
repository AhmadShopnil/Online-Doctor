import React from 'react';

const ServiceCard = ({ service }) => {
    const { icon, details, title } = service

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>

            </div>
        </div>
    );
};

export default ServiceCard;