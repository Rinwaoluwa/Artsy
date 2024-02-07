import styles from "./ShoppingCartStats.module.css";

function ShoppingCartStats() {
    return (
        <div className={styles['stats']}>
            <p className={styles['product']}>Products in cart :
                <span className={styles['product-count']}> 4 items</span>
            </p>
            <p className={styles['shipping']}>Shipping:
                <span className={styles['shipping-fee']}>₦3000</span>
            </p>
            <p className={styles['total']}>Total:
                <span className={styles['total-amount']}>₦700,000</span>
            </p>
        </div>
    )
}

export default ShoppingCartStats
