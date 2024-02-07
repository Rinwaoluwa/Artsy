import styles from './ExploreMarketPlace.module.css'
import ForwardArrowIcon from './ForwardArrowIcon'

function ExploreMarketPlace() {
    return (
        <section className={styles['explore']}>
            <div className={styles['explore-marketplace']}>
                <h3 className={styles['explore-marketplace-text']}>Explore Marketplace</h3>
                <a href='#' className={styles['explore-marketplace-btn']}><ForwardArrowIcon /></a>
            </div>

            <div className={styles['auction']}>
                <h3 className={styles['auction-text']}>See Auctions</h3>
                <a href='#' className={styles['auction-btn']}><ForwardArrowIcon /></a>
            </div>
        </section>
    )
}

export default ExploreMarketPlace
