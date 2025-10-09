import Cover from "../../../share/Cover/Cover";
import ItemsMenu from "../../../share/ItemsMenu";

const MenuCategory = ({ items,coverImg,title,explain }) => {
    return (
        <section>
           { title && <Cover image={coverImg} title={title} explain={explain}></Cover>}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-3 rounded-md my-10'>
                {
                    items.map(item => <ItemsMenu
                        key={item._id}
                        item={item}
                    ></ItemsMenu>)
                }
            </div>
        </section>
    );
};

export default MenuCategory;