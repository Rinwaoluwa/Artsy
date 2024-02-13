import ArtsyText from './ArtsyText';
import Cart from './Cart';
import HamburgerMenu from './HamburgerMenu';
import NotificationBell from './NotificationBell';
import Search from './Search';

import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            {/* Mobile */}
            <nav className={styles['nav_mobile']}>
                <Link to={'/drawer'} >
                    <HamburgerMenu />
                </Link>
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
                    <li className={`${styles['nav_desktop--list-item']}`}>
                        <Link to={'/'}>Home</Link>
                    </li>

                    <li className={`${styles['nav_desktop--list-item']}`}>
                        <Link to={'/products'}>Marketplace</Link>
                    </li>

                    <li className={`${styles['nav_desktop--list-item']}`}>
                        <Link to={'/auctions'}>Auctions</Link>
                    </li>

                    <li className={`${styles['nav_desktop--list-item']}`}>
                        <Link to={'/drops'}>Drop</Link>
                    </li>
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
