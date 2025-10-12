import { useEffect, useState } from 'react';
import loginImg from '../../assets/menu/Rectangle 77.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { NavLink, replace, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

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
            navigate(from ,{replace:true});
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
        <div
            className="hero w-full mt-7 h-[800px] rounded-md"
            style={{ backgroundImage: `url(${loginImg})` }}
        >
            <div className="hero-content flex-col items-stretch p-5">
                <div className="flex flex-col flex-1 items-center justify-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>

                <div className="card flex-1 w-full shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label text-gray-500 text-3xl font-bold">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="input w-full bg-white shadow-md"
                                placeholder="Name"
                            />

                            <label className="label text-gray-500 text-3xl font-bold">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input w-full bg-white shadow-md"
                                placeholder="Email"
                            />

                            <label className="label text-gray-500 text-3xl font-bold">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input w-full bg-white shadow-md"
                                placeholder="Password"
                            />

                            <div>
                                <a className="link link-hover text-lg">Forgot password?</a>
                            </div>

                            <label className="label text-gray-500 text-xl my-3 font-bold">
                                <LoadCanvasTemplate />
                            </label>

                            <input
                                type="text"
                                onBlur={handleCaptcha}
                                name="captcha"
                                className="input w-full bg-white shadow-md"
                                placeholder="Enter Captcha"
                            />

                            <button disabled={disable} className="btn border-none bg-[#D1A054] mt-4">
                                Sign In
                            </button>
                        </form>

                        <h1>
                            Here You Go? <NavLink to={'/signUp'}>Please SignUp</NavLink>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
