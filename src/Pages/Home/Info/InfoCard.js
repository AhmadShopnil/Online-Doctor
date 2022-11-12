import React from 'react';



const InfoCard = ({ info }) => {
    const { title, detail, icon, bg } = info


    return (
        <div className={`card md:card-side ${bg} shadow-xl text-white p-5`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{detail}</p>

            </div>
        </div>
    );
};

export default InfoCard;