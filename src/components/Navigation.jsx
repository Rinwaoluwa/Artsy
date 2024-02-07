import ArtsyText from './ArtsyText';
import Cart from './Cart';
import HamburgerMenu from './HamburgerMenu';
import NotificationBell from './NotificationBell';
import Search from './Search';

import styles from './Navigation.module.css';

// COSIDER RE IMPLEMENTATION
// THERE SURE WOULD BE A WAY WE CAN USE 1 FILE FOR BOTH DESKTOP AND MOILE NAVIGATION
function Navigation() {
    return (
        <>
            {/* Mobile */}
            <nav className={styles['nav_mobile']}>
                <HamburgerMenu />
                <ArtsyText />

                <div className="nav_mobile-items">
                    <Search />
                    <Cart />
                </div>
            </nav>
            {/* Desktop */}
            <nav className={styles['nav_desktop']}>
                <ArtsyText />

                <div className={styles['nav_desktop--list-items']}>
                    <li className={`${styles['nav_desktop--list-item']}`}>Home</li>
                    <li className={`${styles['nav_desktop--list-item']}`}>Marketplace</li>
                    <li className={`${styles['nav_desktop--list-item']}`}>Auctions</li>
                    <li className={`${styles['nav_desktop--list-item']}`}>Drop</li>
                </div>

                <div className={styles['nav_desktop--list-items']}>
                    <Search />
                    <Cart />
                    <NotificationBell />
                </div>
            </nav>
        </>
    )
}

export default Navigation
