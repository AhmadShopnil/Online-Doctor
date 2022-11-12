import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';



const Info = () => {


    const cardInfo = [
        {
            id: 1,
            title: "Opening hour",
            detail: '9.00 Am to 5.00pm',
            icon: clock,
            bg: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id: 2,
            title: "Visit Our Loacation",
            detail: 'Akur-takur para,Tangail',
            icon: marker,
            bg: 'bg-accent'
        },
        {
            id: 3,
            title: "Contact us now",
            detail: '+0988454541',
            icon: phone,
            bg: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]


    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-24'>
            {
                cardInfo.map(info => <InfoCard key={info.id} info={info}></InfoCard>)
            }
        </div>
    );
};

export default Info;