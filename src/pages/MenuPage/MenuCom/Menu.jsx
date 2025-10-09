import Cover from "../../share/Cover/Cover";
import image from '../../../assets/menu/banner3.jpg'
import desserts from '../../../assets/menu/dessert-bg.jpeg'
import pizzas from '../../../assets/menu/pizza-bg.jpg'
import salads from '../../../assets/menu/salad-bg.jpg'
import soups from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu]= useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <section>
            <Cover image ={image} title={'OUR MENU'} explain={'WOULD YOU LIKE TO TRY A DISH ?'}></Cover>
            {/* main cover */}
            <div className="my-8">
                <SectionTitle title={'---Dont Miss---'} subTitle={'TODAYS OFFER'}></SectionTitle>
                {/* offer Menu */}
                <MenuCategory items={offered}></MenuCategory>
                {/* dessert menu */}
               <div className="my-8">
                 <MenuCategory items={dessert} title={'DESSERTS'} coverImg={desserts} explain={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
               </div>
               {/* pizza */}
               <div>
                <MenuCategory items={pizza} title={'PIZZA'} coverImg={pizzas} explain={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
               </div>
               {/* salad */}
               <div>
                <MenuCategory items={salad} title={'SALAD'} coverImg={salads} explain={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
               </div>
               {/* soup */}
               <div>
                <MenuCategory items={soup} title={'SOUP'} coverImg={soups} explain={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
               </div>
            </div>
        </section>
    );
};

export default Menu;