
import Cover from '../share/Cover/Cover';
import banner from '../../assets/contact/banner.jpg';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully",
            showConfirmButton: false,
            timer: 1500
        });
        reset();
    }

    return (
        <div>
            <div className='mb-7'><Cover image={banner} title={'Contact Us'}></Cover></div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="label font-semibold">Name</label>
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your Name"
                        className="input w-full border border-gray-300 bg-white rounded-md p-2"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="label font-semibold">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format",
                            },
                        })}
                        placeholder="Your Email"
                        className="input w-full border border-gray-300 bg-white rounded-md p-2"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Subject */}
                <div>
                    <label className="label font-semibold">Subject</label>
                    <input
                        type="text"
                        {...register("subject", { required: "Subject is required" })}
                        placeholder="Subject"
                        className="input w-full border border-gray-300 bg-white rounded-md p-2"
                    />
                    {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label className="label font-semibold">Message</label>
                    <textarea
                        {...register("message", { required: "Message is required" })}
                        placeholder="Your Message"
                        className="input w-full border border-gray-300 bg-white rounded-md p-2 h-32"
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#D1A054] text-white font-bold py-2 rounded-md mt-2 hover:bg-[#b98540] transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUs;