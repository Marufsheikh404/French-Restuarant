import { useForm } from 'react-hook-form';
import siginImg from '../../assets/menu/Rectangle 77.png'

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data);

    return (
        <div className="hero w-full mt-7 h-[800px] rounded-md" style={{ backgroundImage: `url(${siginImg})` }}>
            <div className="hero-content flex-col items-stretch p-5">
                <div className="flex flex-col flex-1 items-center justify-center ">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card flex-1  w-full shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                            <label className="label text-gray-500 text-3xl font-bold">Name</label>
                            <input type="text" {...register("name", { required: true })} name='name' className="input w-full bg-white shadow-md" placeholder="Name" />
                            {errors.name && <span>This field is required</span>}

                            <label className="label text-gray-500 text-3xl font-bold">Email</label>
                            <input type="email" {...register("email", { required: "Email Address is required" })}
                                aria-invalid={errors.email ? "true" : "false"} name='email' className="input w-full bg-white shadow-md" placeholder="Email" />
                            {errors.email && <p role="alert">{errors.email.message}</p>}

                            <label className="label text-gray-500 text-3xl font-bold">Password</label>
                            <input type="password" {...register("password", { min: 6, max: 10 })} name='password' className="input w-full bg-white shadow-md" placeholder="Password" />
                            {errors.password && <span>This field is required</span>}

                            <div><a className="link link-hover text-lg">Forgot password?</a></div>

                            <button type="submit" className="btn border-none bg-[#D1A054] mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;