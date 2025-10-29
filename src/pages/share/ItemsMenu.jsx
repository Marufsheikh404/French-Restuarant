const ItemsMenu = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <section className="my-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5">
                {/* Image */}
                <img
                    src={image}
                    alt={name}
                    className="w-40 h-40 md:w-[150px] md:h-[150px] object-cover"
                    style={{ borderRadius: '0 200px 200px 200px' }}
                />

                {/* Text & Price */}
                <div className="flex flex-col md:flex-row justify-between flex-1 gap-4 md:gap-5">
                    <div>
                        <h1 className="text-sm md:text-xl text-gray-600 mb-1 md:mb-2">{name} -----------</h1>
                        <p className="text-sm md:text-base text-gray-500">{recipe}</p>
                    </div>
                    <p className="text-[#BB8506] text-sm md:text-xl font-semibold">${price}</p>
                </div>
            </div>
        </section>
    );
};

export default ItemsMenu;
