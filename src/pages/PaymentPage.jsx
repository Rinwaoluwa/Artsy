import Button from "../components/Button";
import Input from "../components/Input";
import CheckedCheckbox from "../components/CheckedCheckbox";
import Navigation from "../components/Navigation";
import Padlock from "../components/Padlock";
import PageRoutes from "../components/PageRoutes";
import styles from "./PaymentPage.module.css";

function PaymentPage() {
    return (
        <main className={styles['payment-page']}>
            <Navigation />
            <PageRoutes />
            <div className={styles['secure']} >
                <Padlock />
                <p className={styles['secure-text']}>Secure server</p>
            </div>
           <section className={styles['payment']} >
            <div className={styles['secure-payment']}>
                <div className={styles['select-wallet']}>
                    <CheckedCheckbox />
                    <p className={styles['secure-payment-text']}>Select your wallet</p>
                </div>
                <p className={styles['cta']}>
                    Connect with one of our available wallet providers or add and connect a new wallet.
                </p>

                {/* when user selects a payment system make the unselected blurd out */}
                {/* disable the input for wallet type when user selects it the name should be */}
                {/* automatically written */}
                <div className={styles['payment-options']}>
                    <img className={styles['payment-option']} src="/images/metamask.png" alt="MetaMask Payment" />
                    <img className={styles['payment-option']} src="/images/coinbase.png" alt="CoinBase Payment" />
                    <img className={styles['payment-option']} src="/images/walletconnect.png" alt="WalletConnect Payment" />
                    <img className={styles['payment-option']} src="/images/phantom.png" alt="Phantom Payment" />
                    <span className={styles['add-more']}>+</span>
                </div>
            </div>

            <form action="" method="post">
                <Input name={'Wallet type'} />

                <div className={styles['key']}>
                    <label htmlFor="key" className={styles['key-label']}>Key</label>
                    <input id="key" type="text" placeholder="Please enter your key" className={styles['key-input']}/>
                    <img src="/images/metamask.png" alt="MetaMask Payment" className={styles['key-image']} />
                </div>

                <Input name={'Expiry date'} />

                <Input name={'Safe code'} />

                    <div className={styles['save-details']} >
                        <input type="checkbox" name="" id="save-details" className={styles['checkbox']} />
                        <label htmlFor="save-details" className={styles['checkbox-label']}>
                            Save my wallet details & information for future transactions
                        </label>
                    </div>
                <footer className={styles['footer']}>
                    <Button>Confirm</Button>
                </footer>
            </form>
           </section>
        </main>
    )
}

export default PaymentPage
