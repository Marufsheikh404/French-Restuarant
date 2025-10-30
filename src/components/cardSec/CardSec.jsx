// import SectionTitle from "../sectionTitle/SectionTitle";

const CardSec = ({items}) => {
     const { image, recipe, category } = items;
    return (
        <section>
            <div>
                <div className="card  w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={image}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">{category}</h2>
                        <p className="text-gray-500 text-sm">{recipe}</p>
                        <div className="card-actions">
                            <button className="btn transition-colors duration-500 ease-in-out bg-[#BB8506] hover:ring-2 hover:ring-violet-600">ADD TO CARD</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardSec;
