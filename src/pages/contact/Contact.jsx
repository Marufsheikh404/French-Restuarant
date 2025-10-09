import { useEffect, useState } from "react";
import CardSec from "../../components/cardSec/CardSec";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Contact = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const salad = data.filter(item => item.category === "salad")
                setCard(salad)
            })
    }, [])
    return (
        <section>
            <div>
                <div className="rounded-md flex flex-col items-center justify-center my-8">
                    <h2 className="text-black border-b-4 border-black pb-1 rounded-md">VIEW FULL MENU</h2>
                </div>

                <div className="bg-black p-10 w-full h-40 my-15 flex items-center justify-center">
                    <h1 className="text-4xl text-gray-200 font-bold">Call Us : 01719199642</h1>
                </div>
            </div>

            <div>
                <div className="mt-16">
                    <SectionTitle
                        title={'Should Try'}
                        subTitle={"Chef Recomonded"}
                    ></SectionTitle>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8 place-items-center">{
                    card?.map(items => <CardSec key={items._id} items={items}></CardSec>)
                }</div>
            </div>
        </section>
    );
};

export default Contact;