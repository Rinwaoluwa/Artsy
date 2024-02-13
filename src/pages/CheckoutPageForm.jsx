import Button from "../components/Button";
import Input from "../components/Input";
import Navigation from "../components/Navigation";
import PageRoutes from "../components/PageRoutes";
import Select from "../components/Select";
import ShoppingCartItems from "../components/ShoppingCartItems";
import ShoppingNavigations from "../components/ShoppingNavigations";
import ShoppingCartStats from "../components/ShoppingCartStats";
import styles from "./CheckoutPageForm.module.css";

function CheckoutPageForm() {
    return (
        <main className={styles['checkout-form-page']}>
            <Navigation />
            <div className={styles['checkout-form-page-sub-nav']}>
                <PageRoutes />
                <ShoppingNavigations />
            </div>

            <section className={styles['checkout-form-section']}>
                <form action="" method="post" className={styles['checkout-form']}>
                    <div className={styles['checkout-email']}>
                        <label htmlFor="email" className={styles['label']}>Your email</label>
                        <input id="email" type="text" placeholder="mesomadarasimiabubakara@gmail.com" className={styles['input']}/>
                    </div>
                    <div className={styles['get-updates']} >
                        <input type="checkbox" name="" id="get-updates" className={styles['checkbox']} />
                        <label htmlFor="get-updates" className={styles['checkbox-label']}>
                            Get updates about new drops & exclusive offers
                        </label>
                    </div>

                    <Select name={'Wallet'}/>

                    <Select name={'City'}/>

                    <Select name={'Country'}/>

                    <Input name={'Postal code'} />

                    <Input name={'Phone number'} />

                    <footer className={styles['footer']}>
                        <Button>Proceed to payment</Button>
                        <a href="#" className={styles['redirect-to-cart']}>Go back to cart</a>
                    </footer>
                </form>

                <div className={styles['product-details']} >
                    <ShoppingCartItems />
                    <ShoppingCartStats />
                </div>
            </section>
        </main>
    )
}

export default CheckoutPageForm
