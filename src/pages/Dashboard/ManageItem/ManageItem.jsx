import { RiDeleteBack2Fill } from "react-icons/ri";
import useMenu from "../../../hooks/useMenu";
import { GrDocumentUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/Axios/useAxios";
import { NavLink } from "react-router-dom";

const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxios();

    const handleDelete = async (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/Menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} work has been saved`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div className="w-full px-2 md:px-6">
            <div className="overflow-x-auto">
                <table className="table w-full min-w-[600px]">
                    {/* head */}
                    <thead className="text-sm md:text-lg bg-[#D1A054]">
                        <tr>
                            <th className="text-black">No</th>
                            <th className="text-black">Image</th>
                            <th className="text-black">Items-Name</th>
                            <th className="text-black">Price</th>
                            <th className="text-black">Update</th>
                            <th className="text-black">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {menu.map((item, index) => (
                            <tr key={item._id} className="text-sm md:text-base">
                                {/* serial */}
                                <th>{index + 1}</th>

                                {/* image */}
                                <td>
                                    <div className="flex items-center justify-center md:justify-start gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-10 w-10 md:h-12 md:w-12">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                {/* name */}
                                <td>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                    </div>
                                </td>

                                {/* price */}
                                <td>${item.price}</td>

                                {/* update */}
                                <td>
                                    <NavLink to={`/dashboard/updateItem/${item._id}`}>
                                        <button className="btn btn-ghost btn-sm md:btn-md">
                                            <GrDocumentUpdate className="text-orange-400" />
                                        </button>
                                    </NavLink>
                                </td>

                                {/* delete */}
                                <td>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-ghost btn-sm md:btn-md"
                                    >
                                        <RiDeleteBack2Fill className="text-red-600" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageItem;