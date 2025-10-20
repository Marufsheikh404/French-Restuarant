import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/Axios/useAxios";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const { data: payments = [] } = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            console.log(res.data);
            return res.data;
        }
    })
    return (
        <div className="bg-gray-100 p-8 rounded-md">
            <h1 className="text-black font-bold">Payment-History:{payments.length}</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 mt-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#D1A054]">
                            <th className="text-black text-sm">No</th>
                            <th className="text-black text-sm">Name</th>
                            <th className="text-black text-sm">Price</th>
                            <th className="text-black text-sm">Transaction-ID</th>
                            <th className="text-black text-sm">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200 backdrop-blur-md">
                        {payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>{payment.name}</td>
                            <td>${payment.price}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.
                                status}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;