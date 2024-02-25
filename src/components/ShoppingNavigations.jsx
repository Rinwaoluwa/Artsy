import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./ShoppingNavigations.module.css";

function ShoppingNavigations() {
    const [highlight, setHighlight] = useState(0);

    return (
        <>
            <nav className={styles['shopping-nav-mobile']}>
                {/* REMEMBER FUNCTION TO SWAP HIGHLIHT WHEN CLICKED */}
                {/* THE HIGHLIGHT WILL CHANGE THE COLOR OF THE TEXT TO #FFF AS WELL */}
                    <div className={`${styles['shopping-nav-mobile-shop']} ${highlight === 0 ? `${styles['highlight-mobile']}` : '' }`}
                        onClick={() => setHighlight(0)}
                    >
                        <Link to='cart'>
                            Shop
                        </Link>
                    </div>
                    <div className={`${styles['shopping-nav-mobile-schedule']} ${highlight ? `${styles['highlight-mobile']}` : '' }`}
                        onClick={() => setHighlight(1)}
                    >
                        <Link to='payment'>
                            Payment
                        </Link>
                    </div>
            </nav>

            <nav className={styles['shopping-nav-desktop']}>
                <div className={styles['shopping-nav-lists']}>
                    <Link to='cart'>
                        <li className={`${styles['shopping-nav-li']} ${highlight === 0 ? `${styles['highlight-desktop']}` : '' }`}
                            onClick={() => setHighlight(0)}
                        >
                            Shopping cart
                        </li>
                    </Link>
                    <Link to='shipping'>
                        <li className={`${styles['shopping-nav-li']} ${highlight === 1 ? `${styles['highlight-desktop']}` : '' }`}
                            onClick={() => setHighlight(1)}
                        >
                            Shopping details
                        </li>
                    </Link>
                    <Link to='payment'>
                        <li className={`${styles['shopping-nav-li']} ${highlight === 2 ? `${styles['highlight-desktop']}` : '' }`}
                            onClick={() => setHighlight(2)}
                        >
                            Payment details
                        </li>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default ShoppingNavigations
