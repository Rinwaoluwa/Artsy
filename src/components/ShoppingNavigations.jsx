import styles from "./ShoppingNavigations.module.css";

function ShoppingNavigations() {
    return (
        <>
            <nav className={styles['shopping-nav-mobile']}>
                {/* REMEMBER FUNCTION TO SWAP HIGHLIHT WHEN CLICKED */}
                {/* THE HIGHLIGHT WILL CHANGE THE COLOR OF THE TEXT TO #FFF AS WELL */}
                <div className={`${styles['shopping-nav-mobile-shop']} ${styles['highlight-mobile']}`}>
                    Shop
                </div>
                <div className={`${styles['shopping-nav-mobile-schedule']} `}>Payment</div>
            </nav>

            <nav className={styles['shopping-nav-desktop']}>
                <div className={styles['shopping-nav-lists']}>
                    <li className={`${styles['shopping-nav-li']} ${styles['highlight-desktop']}`}>Shopping cart</li>
                    <li className={styles['shopping-nav-li']}>Shopping details</li>
                    <li className={styles['shopping-nav-li']}>Payment details</li>
                </div>
            </nav>
        </>
    )
}

export default ShoppingNavigations
