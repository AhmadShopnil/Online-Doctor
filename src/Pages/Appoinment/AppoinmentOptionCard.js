import React from 'react';


const AppoinmentOptionCard = ({ option, setTreatment }) => {
    const { name, slots } = option

    const handleSetTreatment = () => {
        setTreatment(option)
    }


    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className=" font-bold text-xl text-secondary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? "Spaces" : "space"}  available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={handleSetTreatment} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default AppoinmentOptionCard;