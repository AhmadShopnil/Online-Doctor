import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOptionCard from './AppoinmentOptionCard';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Shared/loader/Loader';



const AvailableAppointmen = ({ selectedDate }) => {
    // const [appoinmentOptions, setAppointmentOption] = useState([])
    const [treatment, setTreatment] = useState({});
    const date = format(selectedDate, 'PP')

    const { data: appoinmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appoinmentoptions', date],
        queryFn: () => fetch(`http://localhost:5000/appoinmentoptions?date=${date}`)
            .then(res => res.json())
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/appoinmentoption')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAppointmentOption(data)
    //         })
    // }, [])
    if (isLoading) {
        return <Loader></Loader>
    }


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
                    refetch={refetch}
                ></BookingModal>
            }

        </section>
    );
};

export default AvailableAppointmen;