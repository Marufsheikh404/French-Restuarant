import loginImg from '../../assets/menu/Rectangle 77.png'

const Login = () => {
    return (
        <div className="hero w-full mt-7 h-[800px] rounded-md" style={{backgroundImage:`url(${loginImg})`}}>
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
                        <form className="fieldset">
                            <label className="label text-gray-500 text-3xl font-bold">Name</label>
                            <input type="text" name='name' className="input w-full bg-white shadow-md" placeholder="Name" />
                            <label className="label text-gray-500 text-3xl font-bold">Email</label>
                            <input type="email" name='email' className="input w-full bg-white shadow-md" placeholder="Email" />
                            <label className="label text-gray-500 text-3xl font-bold">Password</label>
                            <input type="password" name='password' className="input w-full bg-white shadow-md" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn border-none bg-[#D1A054] mt-4">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;