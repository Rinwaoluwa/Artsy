import styles from "./AuctionSlide.module.css"

function AuctionSlide() {
    return (
        <figure className={styles['auction-figure']}>
            <img src="/images/auction.png" alt="Auctioned Arts" className={styles['auction-figure-image']}/>
            <figcaption className={styles['auction-figure-caption']}>
                6hr : 40mins: 15s
            </figcaption>
        </figure>
    )
}

export default AuctionSlide
