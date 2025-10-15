import { FaTrash } from "react-icons/fa6";
import useCard from "../../../hooks/useCard";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/Axios/useAxios";

const Cart = () => {
    const [cart,refetch] = useCard();
    const axiosSecure = useAxios();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data?.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Total Orders:{cart.length}</h2>
                <h2 className="text-3xl font-bold">Total Prices:${totalPrice}</h2>
                <button className="bg-[#D1A054] btn border-none text-md">pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table mt-8">
                    {/* head */}
                    <thead className="bg-[#D1A054]">
                        <tr>
                            <th className="text-white">Number</th>
                            <th className="text-white">Item-Image</th>
                            <th className="text-white">Name</th>
                            <th className="text-white">Price</th>
                            <th className="text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">{item.name}</div>
                                </div>
                            </td>
                            <td>
                                {item.price}
                            </td>
                            <th>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-md"><FaTrash className="text-red-600"></FaTrash></button>
                            </th>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;