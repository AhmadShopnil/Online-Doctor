import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../contexts/Authprovider';
import toast from 'react-hot-toast';


const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots } = treatment
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext);


    const handlebooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value
        const slot = form.slot.value
        const email = form.email.value
        const phone = form.phone.value

        const booking = {
            appointmentDate: date,
            userName,
            email,
            email,
            phone,
            treatmentName: name,
            slots: slot
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking Success')
                    refetch()
                }


            })
            .catch(error => console.error(error))


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handlebooking} className='grid grid-cols-1 gap-2 my-6'>
                        <input type="text" disabled value={date} className=" input input-bordered  w-full "
                        />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots?.length > 0 ?
                                    <>
                                        {slots.map((slot, index) => <option
                                            key={index}
                                            value={slot}>{slot}</option>)}
                                    </>
                                    :
                                    <>
                                        <option>No Slot Availabale</option>
                                    </>
                            }
                        </select>
                        <input name='name' defaultValue={user?.displayName} type="text" disabled placeholder="Your Name" className="input input-bordered  w-full " />
                        <input name='email' defaultValue={user?.email} type="email" disabled placeholder="Email Address" className="input input-bordered  w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered  w-full" />
                        <input className='btn  btn-primary text-white' type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;