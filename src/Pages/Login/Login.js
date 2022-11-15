import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider';


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('')

    const { signIn } = useContext(AuthContext)


    const handleLogin = (data) => {
        setLoginError('')
        const email = data.email
        const password = data.password
        signIn(email, password)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)

            })


    }


    return (
        <div className='flex justify-center items-center h-96  my-24  '>
            <div className=' p-10 card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100'>
                <h2 className='text-3xl text-center font-bold'>Login</h2>
                {
                    loginError && <p>{loginError}</p>
                }
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email?</span>
                        </label>
                        <input type="email" className="input input-bordered w-full" {...register("email", { required: 'Email is required' })} />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password?</span>
                        </label>
                        <input type="password" className="input input-bordered w-full " {...register("password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 charecter or more' }

                            })} />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text-alt">Forgot password ?</span>
                        </label>

                    </div>
                    <input className='btn btn-accent w-full ' value='Login' type="submit" />
                </form>

                <p className='mt-2'>New to doctors portal?  <Link className='text-secondary' to='/signup'>Create an account?</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;