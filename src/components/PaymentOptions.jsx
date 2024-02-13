import styles from "./PaymentOptions.module.css";

function PaymentOptions() {
    {/* when user selects a payment system make the unselected blurd out */}
    {/* disable the input for wallet type when user selects it the name should be */}
    {/* automatically written */}
    return (

        <div className={styles['payment-options']}>
            <img className={styles['payment-option']} src="/images/metamask.png" alt="MetaMask Payment" />
            <img className={styles['payment-option']} src="/images/coinbase.png" alt="CoinBase Payment" />
            <img className={styles['payment-option']} src="/images/walletconnect.png" alt="WalletConnect Payment" />
            <img className={styles['payment-option']} src="/images/phantom.png" alt="Phantom Payment" />
            <span className={styles['add-more']}>+</span>
        </div>
    )
}

export default PaymentOptions
