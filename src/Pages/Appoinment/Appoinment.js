import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppointmen from './AvailableAppointmen';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())



    return (
        <div>
            <AppoinmentBanner
                setSelectedDate={setSelectedDate}
                selectedDate={selectedDate}
            ></AppoinmentBanner>
            <AvailableAppointmen
                selectedDate={selectedDate}
            ></AvailableAppointmen>
        </div>
    );
};

export default Appoinment;