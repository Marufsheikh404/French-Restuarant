import { useForm } from 'react-hook-form';
import siginImg from '../../assets/menu/Rectangle 77.png';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const SignUp = () => {

    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const { createUser, setLoading, UpdateUserProfile } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            // 1️⃣ create user with email & password
            const loggerUser = await createUser(data.email, data.password);
            console.log('Created user:', loggerUser.user);
            try {
                await UpdateUserProfile(data.name, data.photoURL);
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: 'Successfully Signed Up!',
                                icon: 'success',
                                draggable: true
                            });
                            reset();
                            navigate('/')
                        }
                    })
            } catch (error) {
                console.log('Profile update error:', error);
            }
        } catch (error) {
            console.log('Signup error:', error);
            Swal.fire({
                title: 'Sign Up Failed!',
                text: error.message,
                icon: 'error'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="hero w-full mt-7 h-[800px] rounded-md"
            style={{ backgroundImage: `url(${siginImg})` }}
        >
            <div className="hero-content flex-col items-stretch p-5">
                <div className="flex flex-col flex-1 items-center justify-center ">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>

                <div className="card flex-1 w-full shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">

                            {/* Name */}
                            <label className="label text-gray-500 text-3xl font-bold">Name</label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Name"
                                className="input w-full bg-white shadow-md"
                            />
                            {errors.name && <span>This field is required</span>}

                            {/* Photo URL */}
                            <label className="label text-gray-500 text-3xl font-bold">Photo URL</label>
                            <input
                                type="text"
                                {...register("photoURL", { required: true })}
                                placeholder="Photo URL"
                                className="input w-full bg-white shadow-md"
                            />
                            {errors.photoURL && <span>Photo URL is required</span>}

                            {/* Email */}
                            <label className="label text-gray-500 text-3xl font-bold">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: "Email Address is required" })}
                                placeholder="Email"
                                className="input w-full bg-white shadow-md"
                            />
                            {errors.email && <p role="alert">{errors.email.message}</p>}

                            {/* Password */}
                            <label className="label text-gray-500 text-3xl font-bold">Password</label>
                            <input
                                type="password"
                                {...register("password", { required: true, minLength: 6 })}
                                placeholder="Password"
                                className="input w-full bg-white shadow-md"
                            />
                            {errors.password && <span>Password must be at least 6 characters</span>}

                            <button
                                type="submit"
                                className="btn border-none bg-[#D1A054] mt-4"
                            >
                                Sign Up
                            </button>
                        </form>
                        <div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
