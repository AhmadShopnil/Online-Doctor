import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Signup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();


    const handleSignup = (data) => {
        console.log(data)
    }


    return (
        <div className='flex justify-center items-center h-96  my-24  '>
            <div className=' p-10 card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100'>
                <h2 className='text-3xl text-center font-bold'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full" {...register("name", { required: 'Name is required' })} />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full" {...register("email", { required: 'Email is required' })} />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full " {...register("password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 charecter or more' }

                            })} />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary mt-4 w-full ' value='Sign Up' type="submit" />
                </form>

                <p className='mt-2'>Already have an account? <Link className='text-secondary' to='/login'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Signup;