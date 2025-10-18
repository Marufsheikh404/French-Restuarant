import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/Axios/useAxios";
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
import { Notyf } from "notyf";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {

    // Create an instance of Notyf
    const notyf = new Notyf();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxios();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        // send to the imagebb 
        const imageFile = { image: data.image[0] };
        // console.log(imageFile)
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // send data to the server
            const imageUrl = res.data.data.display_url;
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: imageUrl
            }
            const menuRes = await axiosSecure.post('/Menu', menuItem)
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Item Is Added",
                    showConfirmButton: false,
                    timer: 1500
                });
                notyf.success(' have been successfully saved!');
            }
        }
    };
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-[#A1A1A1] p-3">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-black">Recipe Name*</legend>
                        <input {...register('name')} type="text" className="input bg-white w-full" placeholder="Type here" />
                    </fieldset>
                    <div className="flex items-center gap-3 w-full">
                        <div className="flex-1">
                            <p>Category*</p>
                            <select {...register('category')} defaultValue="Pick a font" className="select select-ghost bg-white">
                                <option disabled={true}>Category</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>dezzert</option>
                                <option>drinks</option>
                            </select>
                        </div>
                        <div className="flex-1"> <p>Price*</p>
                            <input {...register('price')} type="text" placeholder="Type here" className="input bg-white" />
                        </div>
                    </div>
                    <div>
                        <legend className="fieldset-legend mt-3 text-black">Recipe Details*</legend>
                        <fieldset className="fieldset bg-white">
                            <textarea {...register('details')} className="textarea bg-white" placeholder="Bio"></textarea>
                        </fieldset>
                    </div>
                    <div className="mt-3">
                        <input {...register('image')} type="file" className="file-input  bg-white" />
                    </div>
                    <div className="flex items-center gap-3 mt-2 ">
                        <FaUtensils />
                        <button className="btn bg-white"><span className="text-black">Add Items</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;