import styles from "./ShoppingNavigations.module.css";

function ShoppingNavigations() {
    return (
        <nav className={styles['shopping-nav-mobile']}>
            {/* REMEMBER FUNCTION TO SWAP HIGHLIHT WHEN CLICKED */}
            {/* THE HIGHLIGHT WILL CHANGE TE COLOR OF THE TEXT TO #FFF AS WELL */}
            <div className={`${styles['shopping-nav-mobile-shop']} ${styles['highlight']}`}>Shop</div>
            <div className={`${styles['shopping-nav-mobile-schedule']} `}>Scheduled</div>
        </nav>
    )
}

export default ShoppingNavigations
