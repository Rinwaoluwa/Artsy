import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./ShoppingNavigations.module.css";

function ShoppingNavigations() {
    const [translateAnimation, setTranslateAnimation] = useState(false);
    // Use Params Url to check page of app so to add the highlight correctly.
    //  For shopping NAd desktop because of we use state what if users sends url to someone else ?
    // the page will not be correctly highlighted
    return (
        <>
            <nav className={styles['shopping-nav-mobile']}>
                {/* REMEMBER FUNCTION TO SWAP HIGHLIHT WHEN CLICKED */}
                {/* THE HIGHLIGHT WILL CHANGE THE COLOR OF THE TEXT TO #FFF AS WELL */}
                <div className={styles['tabs']}>
                    <Link to='cart'>
                        <span className={styles['shopping-nav-label']} onClick={() => setTranslateAnimation(false)}>
                            Shop
                        </span>
                    </Link>

                    <Link to='payment'>
                        <span className={styles['shopping-nav-label']} onClick={() => setTranslateAnimation(true)}>
                            Payment
                        </span>
                    </Link>

                    <div className={`${styles['tabs__indicator']} ${translateAnimation && styles['translate__tabs__indicator']}`} aria-hidden="true">
                        <div className={`${styles['tabs__track']} ${translateAnimation && styles['translate__tabs__track']}`}>
                            <span className={styles['shopping-nav-label']}>
                                Shop
                            </span>

                            <span className={styles['shopping-nav-label']}>
                                Payment
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className={styles['shopping-nav-desktop']}>
                <div className={styles['shopping-nav-lists']}>
                    <Link to='cart'>
                        <li alt="Shopping cart" className={`${styles['shopping-nav-li']}`}>
                            Shopping cart
                        </li>
                    </Link>
                    <Link to='shipping'>
                        <li alt="Shopping details" className={`${styles['shopping-nav-li']}`}>
                            Shopping details
                        </li>
                    </Link>
                    <Link to='payment'>
                        <li alt="Payment details" className={`${styles['shopping-nav-li']}`}>
                            Payment details
                        </li>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default ShoppingNavigations
