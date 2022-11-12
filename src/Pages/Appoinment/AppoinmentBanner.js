// import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppoinmentBanner = ({ setSelectedDate, selectedDate }) => {



    return (
        <header>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">
                    <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppoinmentBanner;