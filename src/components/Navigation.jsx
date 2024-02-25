import ArtsyText from './ArtsyText';
import Cart from './Cart';
import HamburgerMenu from './HamburgerMenu';
import { NavLink } from 'react-router-dom';
import NotificationBell from './NotificationBell';

import Search from './Search';
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <>
            {/* Mobile */}
            <nav className={styles['nav_mobile']}>
                <NavLink to='/drawer'>
                    <HamburgerMenu />
                </NavLink>
                <ArtsyText />

                <div className="nav_mobile-items">
                    <Search />
                    <NavLink to='/checkout'>
                        <Cart />
                    </NavLink>
                </div>
            </nav>
            {/* Desktop */}
            <nav className={styles['nav_desktop']}>
                <ArtsyText />

                <div className={styles['nav_desktop--list-items']}>
                    <li className={`${styles['nav_desktop--list-item']}`}>
                        <NavLink to='/'>Home</NavLink>
                    </li>

                    <li className={`${styles['nav_desktop--list-item']}`}>
                        <NavLink to='/product'>Marketplace</NavLink>
                    </li>

                    <li className={`${styles['nav_desktop--list-item']}`}>
                        <NavLink to='/auctions'>Auctions</NavLink>
                    </li>

                    <li className={`${styles['nav_desktop--list-item']}`}>
                        <NavLink to='/drops'>Drop</NavLink>
                    </li>
                </div>

                <div className={styles['nav_desktop--list-items']}>
                    <Search />
                    <NavLink to='/checkout'>
                        <Cart />
                    </NavLink>
                    <NotificationBell />
                </div>
            </nav>
        </>
    )
}

export default Navigation
