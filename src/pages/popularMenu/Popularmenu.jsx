import { useEffect, useState } from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import ItemsMenu from '../share/ItemsMenu';

const Popularmenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular')
                setMenu(popularItem)
            })
    }, [])
    return (
        <section>

            <div className='my-8'>
                <SectionTitle
                    title={'Check It Out'}
                    subTitle={'FROM OUR MENU'}
                ></SectionTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-3 rounded-md'>
                {
                    menu.map(item => <ItemsMenu
                        key={item._id}
                        item={item}
                    ></ItemsMenu>)
                }
            </div>
        </section>
    );
};

export default Popularmenu;