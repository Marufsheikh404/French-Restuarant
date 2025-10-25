import { useEffect, useState } from 'react';
import loginImg from '../../assets/menu/Rectangle 77.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { NavLink, replace, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/Login verification.json'

const Login = () => {
    const { signIn, setLoading } = useAuth();
    const [disable, setDisable] = useState(true);

    // very important
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    // handleCaptcha 
    const handleCaptcha = (e) => {
        const inputCaptcha = e.target.value;
        if (validateCaptcha(inputCaptcha)) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    };

    //  form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const login = await signIn(email, password);
            console.log(login.user);

            Swal.fire({
                title: 'Login Successful!',
                icon: 'success',
                draggable: true,
            });
            form.reset();
            navigate(from, { replace: true });
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Login Failed!',
                text: error.message,
                icon: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    // ✅ return অংশ কম্পোনেন্টের ভেতরেই থাকবে
    return (
        <div className="hero w-full mt-7 h-[800px] rounded-md" style={{ backgroundImage: `url(${loginImg})` }}>
            {/* main container: flex row */}
            <div className="hero-content flex flex-col lg:flex-row items-stretch p-5 gap-5 w-full">

                {/* Login form */}
                <div className=" w-full  lg:w-1/2 card shadow-2xl">
                    <div className="flex flex-col flex-1 items-center justify-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label text-gray-500 text-3xl font-bold">Name</label>
                            <input type="text" name="name" className="input w-full bg-white shadow-md" placeholder="Name" />

                            <label className="label text-gray-500 text-3xl font-bold">Email</label>
                            <input type="email" name="email" className="input w-full bg-white shadow-md" placeholder="Email" />

                            <label className="label text-gray-500 text-3xl font-bold">Password</label>
                            <input type="password" name="password" className="input w-full bg-white shadow-md" placeholder="Password" />

                            <div>
                                <a className="link link-hover text-lg text-[#D1A054]">Forgot password?</a>
                            </div>

                            <label className="label text-gray-500 text-xl my-3 font-bold">
                                <LoadCanvasTemplate />
                            </label>

                            <input type="text" onBlur={handleCaptcha} name="captcha" className="input w-full bg-white shadow-md" placeholder="Enter Captcha" />

                            <button disabled={disable} className="btn border-none bg-[#D1A054] mt-4">Sign In</button>
                        </form>

                        <div className="flex items-center gap-3">
                            <h1 className='text-lg font-bold text-[#D1A054]'>
                                <span className='text-md'>New Here?</span> <NavLink to={'/signUp'}>Create a New Account</NavLink>
                            </h1>
                            <SocialLogin />
                        </div>
                    </div>
                </div>

                {/* Login animation */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <Lottie animationData={loginAnimation} />
                </div>
            </div>
        </div>

    );
};

export default Login;
