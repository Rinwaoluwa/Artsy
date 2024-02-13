import styles from "./PaymentSummary.module.css";
import ShoppingCartStats from "./ShoppingCartStats";

function PaymentSummary() {
    return (
        <div className={styles['payment-summary']}>
            <h3 className={styles['payment-summary-text']}>Payment Summary</h3>
            <div className={styles['payment-summary-details']}>
                <p className={styles['payment-summary-wallet-details']}>
                    Metamask wallet : 002345KJi90pzzz3
                </p>
                <p className={styles['payment-summary-address']}>Actively linked to Yaba, Lagos Nigeria.</p>
            </div>
            <div className={styles['payment-summary-delivery']}>
                <p className={styles['payment-summary-delivery-details']}>
                    Expected arrival date: Between 22nd September and 26th September 2022
                </p>
            </div>
            <ShoppingCartStats />
        </div>
    )
}

export default PaymentSummary
