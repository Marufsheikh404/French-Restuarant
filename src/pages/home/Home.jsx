import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Contact from "../contact/Contact";
import Featured from "../featured/Featured";
import Popularmenu from "../popularMenu/Popularmenu";
import Testomoniya from "../testomoniya/Testomoniya";
const Home = () => {
    return (
        <div>
          <Helmet>
            <title>HOME-PAGE</title>
          </Helmet>
          <Banner></Banner>
          <Category></Category>
          <Popularmenu></Popularmenu>
          <Contact></Contact>
          <Featured></Featured>
          <Testomoniya></Testomoniya>
        </div>
    );
};

export default Home;