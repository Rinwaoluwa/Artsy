import { Link } from 'react-router-dom'
import styles from './ExploreMarketPlace.module.css'
import ForwardArrowIcon from './ForwardArrowIcon'

function ExploreMarketPlace() {
    return (
        <section className={styles['explore']}>
            <div className={styles['explore-marketplace']}>
                <h3 className={styles['explore-marketplace-text']}>Explore Marketplace</h3>
                <span className={styles['explore-marketplace-btn']}>
                    <Link to={'/products'}>
                        <ForwardArrowIcon />
                    </Link>
                </span>
            </div>

            <div className={styles['auction']}>
                <h3 className={styles['auction-text']}>See Auctions</h3>
                <span className={styles['auction-btn']}>
                    <Link to={'/auctions'}>
                        <ForwardArrowIcon />
                    </Link>
                </span>
            </div>
        </section>
    )
}

export default ExploreMarketPlace
