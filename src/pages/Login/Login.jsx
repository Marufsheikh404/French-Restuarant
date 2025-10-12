import {useEffect, useRef, useState } from 'react';
import loginImg from '../../assets/menu/Rectangle 77.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { createUser } = useAuth();

    const [disable, setDisable] = useState(true);
    const captchaRef = useRef(null)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            const result = await createUser(email, password);
            const user = result.user;
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCaptcha = () => {
        const inputCaptcha = captchaRef.current.value;
        if (validateCaptcha(inputCaptcha)) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }

    return (
        <div className="hero w-full mt-7 h-[800px] rounded-md" style={{ backgroundImage: `url(${loginImg})` }}>
            <div className="hero-content flex-col items-stretch p-5">
                <div className="flex flex-col flex-1 items-center justify-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card flex-1  w-full shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label text-gray-500 text-3xl font-bold">Name</label>
                            <input type="text" name='name' className="input w-full bg-white shadow-md" placeholder="Name" />
                            <label className="label text-gray-500 text-3xl font-bold">Email</label>
                            <input type="email" name='email' className="input w-full bg-white shadow-md" placeholder="Email" />
                            <label className="label text-gray-500 text-3xl font-bold">Password</label>
                            <input type="password" name='password' className="input w-full bg-white shadow-md" placeholder="Password" />
                            <div><a className="link link-hover text-lg">Forgot password?</a></div>

                            <label className="label text-gray-500 text-xl my-3 font-bold"> <LoadCanvasTemplate /></label>
                            <input type="text" ref={captchaRef} name='capcha' className="input w-full bg-white shadow-md" placeholder="" />
                            <button onClick={handleCaptcha} className="btn btn-xs bg-indigo-400">Validate</button>
                            <button disabled={disable} className="btn border-none bg-[#D1A054] mt-4">Sign In</button>
                        </form>
                        <h1>Here You Go? <NavLink to={'/signUp'}>Please SignUp</NavLink></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;