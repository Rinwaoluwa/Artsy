import CloseX from "./CloseX";
import styles from "./ShoppingCartItem.module.css";

function ShoppingCartItems() {
    return (
        <li className={styles['cart-item']}>
            <div className={styles['cart-item-info']}>
                <img src="/images/cartitem.png" alt="" className={styles['cart-item-image']}/>
                <div className={styles['cart-item-details']}>
                    <p className={styles['cart-item-paragraph']}>Editorial</p>
                    <h3 className={styles['cart-item-name']}>Philomena</h3>
                    <div className={styles['cart-item-statistics']}>
                        <span className={styles['cart-item-decrease']}>-</span>
                        <span className={styles['cart-item-number']}>1</span>
                        <span className={styles['cart-item-increase']}>+</span>
                    </div>
                </div>
            </div>
            <div className={styles['remove-cart-item']}>
                <CloseX height="10px" width="10px"/>
                <div className={styles['cart-item-price']}>
                    ₦340,000
                </div>
            </div>
        </li>
    )
}

export default ShoppingCartItems
