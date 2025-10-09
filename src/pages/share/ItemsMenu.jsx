
const ItemsMenu = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <section>
            <div className="flex items-center gap-5">
                <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[150px] object-cover" src={image} alt="" />
                <div className="flex  gap-5">
                    <div>
                        <h1 className="text-xl text-gray-600">{name} -----------</h1>
                        <p className="text-sm text-gray-500">{recipe}</p>
                    </div>
                    <p className="text-[#BB8506]">${price}</p>
                </div>
            </div>
        </section>
    );
};

export default ItemsMenu;