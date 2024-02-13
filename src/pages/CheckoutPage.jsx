import Navigation from "../components/Navigation";
import PageRoutes from "../components/PageRoutes";
import ShoppingCartItems from "../components/ShoppingCartItems";
import ShoppingCartStatistics from "../components/ShoppingCartStatistics";
import ShoppingNavigations from "../components/ShoppingNavigations";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
    return (
        <main className={styles['checkout']}>
            <Navigation />
            <PageRoutes />
            <section className ={styles['checkout-section']}>
                <ShoppingNavigations />
                <ShoppingCartItems />
                <ShoppingCartStatistics />
            </section>
        </main>
    )
}

export default CheckoutPage
