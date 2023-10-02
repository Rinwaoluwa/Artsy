import HamburgerMenu from './HamburgerMenu';
import ArtsyText from './ArtsyText';
import Cart from './Cart';
import Search from './Search';

import styles from './MobileNavigation.module.css'

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
