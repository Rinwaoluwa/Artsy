import { useState } from "react";

import Chatbox from "../components/Chatbox";
import FakeChatSupport from "../components/FakeChatSupport";
import IntroductionText from "../components/Introduction-text";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import FeaturedProducts from "../components/FeaturedProducts";
import Exibition from "../components/Exibition";
import ExploreMarketPlace from "../components/ExploreMarketPlace";
import Billboard from "../components/Billboard";
import Footer from "../components/Footer";

import styles from "./Homepage.module.css";

function Homepage() {
    const [showChatSupport, setShowChatSupport] = useState(false);
    {/* change billbord image*/}
    return (
        <main className={styles['homepage']}>
            <Navigation />
            <IntroductionText/>
            <Gallery/>
            <FeaturedProducts />
            <Exibition />
            <ExploreMarketPlace />
            <Billboard />
            <Footer />
            <div className={styles['desktop-chat-support']} onClick={() => setShowChatSupport(show => !show)}>
                <Chatbox />
            </div>
            {showChatSupport && <FakeChatSupport openSupport={setShowChatSupport}/>}
        </main>
    )
}

export default Homepage
