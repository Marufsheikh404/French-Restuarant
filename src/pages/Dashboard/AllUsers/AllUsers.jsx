import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/Axios/useAxios";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxios();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const token = localStorage.getItem('access-token');
            console.log('Token:', token); // check token presence

            const res = await axiosSecure.get('https://bistro-server-mu-nine.vercel.app/users', {
                headers: {
                    Authorization: `Bearer ${token}` // Capital A
                }
            });

            return res.data;
        }
    });


    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name}is an admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
        <div>
            <div>
                <h2 className="text-2xl text-black font-cinzel">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-2xl text-black font-bold">No</th>
                            <th className="text-2xl text-black font-bold">Name</th>
                            <th className="text-2xl text-black font-bold">Email</th>
                            <th className="text-2xl text-black font-bold">Role</th>
                            <th className="text-2xl text-black font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) =>
                            <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                {user.role === "admin" ? "Admin" : <td><FaUsers onClick={() => handleMakeAdmin(user)} className="bg-[#D1A054] text-white btn-ghost btn border-none"></FaUsers></td>}
                                <th>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs"><FaDeleteLeft></FaDeleteLeft></button>
                                </th>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;