
const OrderCard = ({ order}) => {
    const { image, price, name, recipe } = order;
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
                        <button className="btn text-[#BB8506] bg-[#E8E8E8] border-none border-b-4 !border-b-[#BB8506] rounded-md">ADD TO CARD</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderCard;