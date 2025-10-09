import featured from "../../assets/home/featured.jpg";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
const Featured = () => {
    return (
        <section>
            <div>
                <SectionTitle
                    title={'---Check It Out---'}
                    subTitle={'FROM OUR MENU'}
                ></SectionTitle>
            </div>
            <div className="flex items-center justify-center gap-20 bg-featured bg-cover w-full h-96 insert-0 bg-opacity-100 mt-5">

                <div>
                    <img className="w-96" src={featured} alt="" />
                </div>
                <div>
                    <h2 className="text-gray-200">March 20, 2023
                        WHERE CAN I GET SOME?</h2>
                    <p className="text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br /> voluptate facere, deserunt dolores maiores quod nobis quas <br /> quasi. Eaque repellat recusandae ad laudantium tempore <br /> consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <div>
                        <button>
                            <div className="rounded-md flex flex-col my-8">
                                <h2 className="text-white font-semibold border-b-4 border-white pb-1 rounded-md mt-6">READ MORE</h2>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;