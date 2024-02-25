import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import PageRoutes from "../components/PageRoutes";
import ShoppingNavigations from "../components/ShoppingNavigations";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
    return (
        <main className={styles['checkout']}>
            <Navigation />
            <PageRoutes />
            <section className ={styles['checkout-section']}>
                <ShoppingNavigations />
                <Outlet />
            </section>
        </main>
    )
}

export default CheckoutPage
