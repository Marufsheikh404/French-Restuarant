import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const OrderCard = ({ order }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { image, price, name, recipe, _id } = order;

    const handleAddToCard = (food) => {
        const { image, price, name, _id } = food;
        if (user && user.email) {
            // todo: to send data to the database
            const cardItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }
            axios.post('http://localhost:5000/carts', cardItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Added Successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        } else {
            Swal.fire({
                title: "You Are Not Login",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Login First!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <section>
            <div className="card w-96 shadow-sm bg-[#F3F3F3]">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="foods"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl">{name}</h2>
                    <p className="text-sm text-gray-500">{recipe}</p>
                    <div className="card-actions">
                        <button
                            onClick={() => { handleAddToCard(order) }}
                            className="btn text-[#BB8506] bg-[#E8E8E8] border-none border-b-4 !border-b-[#BB8506] rounded-md">ADD TO CARD</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderCard;