import ArrowHeadLeft from "./ArrowHeadLeft"
import Button from "./Button"
import ShoppingCartStats from "./ShoppingCartStats"

import styles from "./ShoppingCartStatistics.module.css"

function ShoppingCartStatistics() {
    return (
        <div className={styles['checkout-section-items-statistics']}>
            {/*  when uer click the arrow the page should scroll up in .2s for animation */}
            <ArrowHeadLeft />
            <ShoppingCartStats />

            <div className={styles['checkout-section-items-grand-total']}>
                <p className={styles['checkout-section-grand-total']}>Grand Total:
                    <span className={styles['checkout-section-grand-total-amount']}>₦703,000</span>
                </p>
            </div>
            <div className={styles['shopping-buttons']} >
                <Button>Proceed to checkout</Button>
                <a className={styles['continue-shopping']} href="#">Continue Shopping</a>
            </div>
        </div>
    )
}

export default ShoppingCartStatistics
