import { NavLink, useParams } from "react-router-dom";
import Cover from "../../../share/Cover/Cover";
import ItemsMenu from "../../../share/ItemsMenu";

const MenuCategory = ({ items, coverImg, title, explain }) => {
    return (
        <section>
            {title && <Cover image={coverImg} title={title} explain={explain}></Cover>}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-3 rounded-md my-10'>
                {
                    items.map(item => <ItemsMenu
                        key={item._id}
                        item={item}
                    ></ItemsMenu>)  
                }
            </div>
            <NavLink to={`/order/${title}`} className="flex items-center justify-center">
                <div className="rounded-md flex flex-col my-8 bg-gradient-to-r border-b-4 border-black p-4 hover:bg-gray-100 transition">
                    <h2 className="text-black font-semibold pb-1 rounded-md mt-2">
                        ORDER YOUR FAVORITE FOODS
                    </h2>
                </div>
            </NavLink>
        </section>
    );
}; 

export default MenuCategory;