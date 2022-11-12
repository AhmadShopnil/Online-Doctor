import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import doctorImg from '../../../assets/images/doctor-small.png'

const HomeAppointment = () => {
    return (
        <div className="hero my-32  " style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-content  lg:gap-10  flex-col  md:flex-row">
                <img src={doctorImg} className=" hidden lg:max-w-xl rounded-lg lg:block -mt-24 -mb-4 " />
                <div className='lg:w-1/2 text-white '>
                    <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;