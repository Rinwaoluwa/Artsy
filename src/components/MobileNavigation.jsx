import HamburgerMenu from './HamburgerMenu';
import ArtsyText from './ArtsyText';
import Cart from './Cart';
import Search from './Search';

import styles from './MobileNavigation.module.css'

// COSIDER RE IMPLEMENTATION
// THERE SURE WOULD BE A WAY WE CAN USE 1 FILE FOR BOTH DESKTOP AND MOILE NAVIGATION
function MobileNavigation() {
    return (
        <nav className={styles.nav}>

           <HamburgerMenu />
           <ArtsyText />

           <span className={styles.navItem}>
                <Search />
                <Cart />
           </span>
        </nav>
    )
}

export default MobileNavigation
