import React from 'react';
import treatmenImg from '../../../assets/images/treatment.png';


const Treatment = () => {
    return (
        <div className="hero ">
            <div className="hero-content  gap-10  flex-col  md:flex-row">
                <img src={treatmenImg} className="max-w-sm rounded-lg shadow-2xl  " />
                <div className='md:w-1/2 '>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;