import IntroductionText from "../components/Introduction-text";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import styles from "./Homepage.module.css";
import FeaturedProducts from "../components/FeaturedProducts";
import Exibition from "../components/Exibition";
import ExploreMarketPlace from "../components/ExploreMarketPlace";
import Billboard from "../components/Billboard";
import Footer from "../components/Footer";

function Homepage() {
    return (
        <main className={styles['homepage']}>
            <Navigation />
            <IntroductionText/>
            <Gallery/>
            <FeaturedProducts />
            <Exibition />
            <ExploreMarketPlace />
            {/* change billbord image*/}
            <Billboard />
            <Footer />
        </main>
    )
}

export default Homepage
