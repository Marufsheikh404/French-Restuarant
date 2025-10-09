import Banner from "../banner/Banner";
import Category from "../category/Category";
import Contact from "../contact/Contact";
import Featured from "../featured/Featured";
import Popularmenu from "../popularMenu/Popularmenu";
const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <Popularmenu></Popularmenu>
          <Contact></Contact>
          <Featured></Featured>
        </div>
    );
};

export default Home;