import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/Axios/useAxios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
     const {name,category, recipe, price, _id} = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxios();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('image',data.image[0] )
        // send to the imagebb 
        // const imageFile = { image: data.image[0] };
        // console.log(imageFile)
        const res = await axiosPublic.post(image_hosting_api, formData, {
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
            const menuRes = await axiosSecure.patch(`/Menu/${_id}`, menuItem)
            // console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Item Is Updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };
    return (
        <div>
            <SectionTitle subTitle={'Update Item'}></SectionTitle>

            <div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#A1A1A1] p-3">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-black">Recipe Name*</legend>
                            <input defaultValue={name} {...register('name')} type="text" className="input bg-white w-full" placeholder="Type here" />
                        </fieldset>
                        <div className="flex items-center gap-3 w-full">
                            <div className="flex-1">
                                <p>Category*</p>
                                <select defaultValue={category} {...register('category')} className="select select-ghost bg-white">
                                    <option disabled={true}>Category</option>
                                    <option>salad</option>
                                    <option>pizza</option>
                                    <option>soup</option>
                                    <option>dezzert</option>
                                    <option>drinks</option>
                                </select>
                            </div>
                            <div className="flex-1"> <p>Price*</p>
                                <input defaultValue={price} {...register('price')} type="text" placeholder="Type here" className="input bg-white" />
                            </div>
                        </div>
                        <div>
                            <legend className="fieldset-legend mt-3 text-black">Recipe Details*</legend>
                            <fieldset className="fieldset bg-white">
                                <textarea defaultValue={recipe} {...register('details')} className="textarea bg-white" placeholder="Bio"></textarea>
                            </fieldset>
                        </div>
                        <div className="mt-3">
                            <input {...register('image')} type="file" className="file-input  bg-white" />
                        </div>
                        <div className="flex items-center gap-3 mt-2 ">
                            <button className="btn bg-white"><span className="text-black">Add Items</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;