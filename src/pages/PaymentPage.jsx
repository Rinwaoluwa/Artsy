import Button from "../components/Button";
import Padlock from "../components/Padlock";
import PageRoutes from "../components/PageRoutes";
import PaymentForm from "../components/PaymentForm";
import PaymentSummary from "../components/PaymentSummary";
import styles from "./PaymentPage.module.css";

function PaymentPage() {
    return (
        <main className={styles['payment-page']}>

            <div className={styles['payment-page-sub-nav']}>
                <PageRoutes />
            </div>

            <div className={styles['secure']} >
                <Padlock />
                <p className={styles['secure-text']}>Secure server</p>
            </div>

           <section className={styles['payment']} >
                <PaymentForm />
                <PaymentSummary />
           </section>

           {/* FIX THIS LARGE SCREEN SIZES */}

            <footer className={styles['footer']}>
                <Button>Confirm</Button>
            </footer>
        </main>
    )
}

export default PaymentPage
