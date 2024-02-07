import AuctionSlide from "../components/AuctionSlide";
import ArrowHeadLeft from "../components/ArrowHeadLeft";
import Ellipse from "../components/Ellipse";
import Navigation from "../components/Navigation";
import PopularBids from "../components/PopularBids";
import styles from "./AuctionPage.module.css";

function AuctionPage() {
    return (
        <main className={styles['auction-page']}>
            <Navigation />
           <section className={styles['auction']}>
                <span className={styles['auction-overview-text']}>Here’s an overview of
                    products actively on auction, explore!
                </span>
                <div className={styles['left-arrow']}><ArrowHeadLeft /></div>
                <div className={styles['right-arrow']}><ArrowHeadLeft /></div>
                <div className={styles['auction-image-gliders']}>
                   <AuctionSlide />
                   <AuctionSlide />
                   <AuctionSlide />
                   <AuctionSlide />
                   <AuctionSlide />
                </div>
                <div className="ellipse">
                    <Ellipse />
                    <Ellipse />
                    <Ellipse />
                    <Ellipse />
                </div>

                <div className={styles['auction-top-creators']}>Top bids from popular creators</div>
                <PopularBids />
                <PopularBids />
                <PopularBids />
           </section>
        </main>
    )
}

export default AuctionPage
