import CheckedCheckbox from "./CheckedCheckbox";
import Input from "./Input";
import PaymentOptions from "./PaymentOptions";
import styles from "./PaymentForm.module.css";

function PaymentForm() {
    return (
        <>
            <h3 className={styles['payment-text']}> Payment method</h3>
            <div className={styles['payment-form']}>
                <div className={styles['secure-payment']}>
                    <div className={styles['select-wallet']}>
                        <CheckedCheckbox />
                        <p className={styles['secure-payment-text']}>Select your wallet</p>
                    </div>
                    <p className={styles['cta']}>
                        Connect with one of our available wallet providers or add and connect a new wallet.
                    </p>
                    <PaymentOptions />
                </div>
                <form action="" method="post" className={styles['form']}>
                    <Input name={'Wallet type'} />

                    <div className={styles['key']}>
                        <label htmlFor="key" className={styles['key-label']}>Key</label>
                        <input id="key" type="text" placeholder="Please enter your key" className={styles['key-input']}/>
                        <img src="/images/metamask.png" alt="MetaMask Payment" className={styles['key-image']} />
                    </div>

                    <Input name={'Expiry date'} />

                    <Input name={'CVV'} />

                    <div className={styles['save-details']} >
                        <input type="checkbox" name="" id="save-details" className={styles['checkbox']} />
                        <label htmlFor="save-details" className={styles['checkbox-label']}>
                            Save my wallet details & information for future transactions
                        </label>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PaymentForm
