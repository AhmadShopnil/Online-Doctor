import React from 'react';
import bgImg from '../../../assets/images/appointment.png'


const Contact = () => {
    return (

        <div style={{
            background: `url(${bgImg})`
        }}
            className='w-full flex justify-center py-16 text-white my-16'>
            <div className=''>
                <h4 className='text-center font-semibold text-secondary'>Contact Us</h4>
                <h2 className='text-3xl'>Stay connected with us</h2>
                <form className='form-control gap-3 mx-auto mt-6'>
                    <input type="email" placeholder="Email Address" className="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" placeholder="Subject" className="input input-bordered input-success w-full max-w-xs" />
                    <textarea className="textarea textarea-info w-full max-w-xs" placeholder="Details"></textarea>
                    <input className='mt-4 btn btn-primary bg-gradient-to-r from-secondary to-primary' type="submit" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default Contact;