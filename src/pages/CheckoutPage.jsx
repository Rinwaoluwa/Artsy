import ArrowHeadLeft from "../components/ArrowHeadLeft";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import PageRoutes from "../components/PageRoutes";
import ShoppingCartItems from "../components/ShoppingCartItems";
import ShoppingCartStats from "../components/ShoppingCartStats";
import ShoppingNavigations from "../components/ShoppingNavigations";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
    return (
        <main className={styles['checkout']}>
            <Navigation />
            <PageRoutes />
            <section className={styles['checkout-section']}>
                <ShoppingNavigations />

                {/* Add this an heigt and width for this image to hade it be specific for all images */}
                <ShoppingCartItems />

                <div className={styles['checkout-section-items-statistics']}>
                    {/*  when uer click the arrow the page should scroll up in .2s for animation */}
                    <ArrowHeadLeft />
                    <ShoppingCartStats />

                    <div className={styles['checkout-section-items-grand-total']}>
                        <p className={styles['checkout-section-grand-total']}>Grand Total:
                            <span className={styles['checkout-section-grand-total-amount']}>₦703,000</span>
                        </p>
                        <Button>Proceed to checkout</Button>
                        <a className={styles['continue-shopping']} href="#">Continue Shopping</a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CheckoutPage
