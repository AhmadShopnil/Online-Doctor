import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import Fluoride from '../../../assets/images/fluoride.png'
import Whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';


const Services = () => {

    const services = [
        {

            id: 1,
            title: 'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: Fluoride

        },
        {

            id: 2,
            title: 'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {

            id: 3,
            title: 'Teeth Whitening',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: Whitening

        }
    ]



    return (
        <div className=' grid justify-items-center p-2  '>
            <h2 className='text-center  text-4xl text-semibold '>Our Services</h2>
            <div className='grid lg:grid-cols-3 gap-6 my-12'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;