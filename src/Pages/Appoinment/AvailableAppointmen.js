import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOptionCard from './AppoinmentOptionCard';
import BookingModal from './BookingModal';


const AvailableAppointmen = ({ selectedDate }) => {
    const [appoinmentOptions, setAppointmentOption] = useState([])
    const [treatment, setTreatment] = useState({});


    useEffect(() => {
        fetch('http://localhost:5000/appoinmentoption')
            .then(res => res.json())
            .then(data => {
                setAppointmentOption(data)
            })
    }, [])

    return (
        <section className='my-10'>
            <h2 className='text-center text-secondary font-semibold text-xl'>Available Appointments on {format(selectedDate, 'PP')}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center  mt-8 mx-6'>
                {
                    appoinmentOptions.map(option => <AppoinmentOptionCard
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppoinmentOptionCard>)
                }

            </div>
            {
                treatment && <BookingModal
                    key={treatment._id}
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></BookingModal>
            }

        </section>
    );
};

export default AvailableAppointmen;