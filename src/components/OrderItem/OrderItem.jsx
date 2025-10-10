import OrderCard from "../OrderCard/OrderCard";

const OrderItem = ({ item }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                item.map(order => <OrderCard
                    key={order._id}
                    order={order}
                ></OrderCard>)
            }
        </div>
    );
};

export default OrderItem;