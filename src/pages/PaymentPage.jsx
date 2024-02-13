import Button from "../components/Button";
import Navigation from "../components/Navigation";
import Padlock from "../components/Padlock";
import PageRoutes from "../components/PageRoutes";
import PaymentForm from "../components/PaymentForm";
import PaymentSummary from "../components/PaymentSummary";
import ShoppingNavigations from "../components/ShoppingNavigations";
import styles from "./PaymentPage.module.css";

function PaymentPage() {
    return (
        <main className={styles['payment-page']}>
            <Navigation />

            <div className={styles['payment-page-sub-nav']}>
                <PageRoutes />
                <ShoppingNavigations />
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
