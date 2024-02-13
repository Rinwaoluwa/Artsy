import AuctionSlide from "../components/AuctionSlide";
import ArrowHeadLeft from "../components/ArrowHeadLeft";
import Ellipse from "../components/Ellipse";
import Navigation from "../components/Navigation";
import PageRoutes from "../components/PageRoutes";
import PopularBids from "../components/PopularBids";
import styles from "./AuctionPage.module.css";

function AuctionPage() {
    return (
        <main className={styles['auction-page']}>
            <Navigation />
            <div className={styles['auction-page-desktop']}>
                <PageRoutes />
            </div>
           <section className={styles['auction']}>
                <span className={styles['auction-overview-text']}>Here’s an overview of
                    products actively on auction, explore!
                </span>
                <div className={`${styles['left-arrow']} ${styles['arrow-auction']}`}>
                    <ArrowHeadLeft />
                </div>
                <div className={`${styles['right-arrow']} ${styles['arrow-auction']}`}>
                    <ArrowHeadLeft />
                </div>
                <div className={styles['auction-image-gliders']}>
                   <AuctionSlide />
                   <AuctionSlide />
                   <AuctionSlide />
                   <AuctionSlide />
                   <AuctionSlide />
                </div>
                <div className={styles['ellipse']}>
                    <Ellipse />
                    <Ellipse />
                    <Ellipse />
                    <Ellipse />
                </div>

                <div className={styles['auction-top-creators']}>Top bids from popular creators</div>
                <div className={styles['auction-top-bids']} >
                    <PopularBids />
                    <PopularBids />
                    <PopularBids />
                    <PopularBids />
                    <PopularBids />
                    <PopularBids />
                </div>
           </section>
        </main>
    )
}

export default AuctionPage
