import ArtsyText from '../components/ArtsyText'
import CloseX from '../components/CloseX'
import Chatbox from '../components/Chatbox'
import styles from './MobileDrawer.module.css'
import { Link } from 'react-router-dom'

function MobileDrawer() {
    return (
        <main className={styles['mobile-drawer-nav-container']}>
            <nav className={styles['mobile-drawer-nav']}>
                <ArtsyText />
                <Link to={'/'}>
                    <CloseX />
                </Link>
            </nav>
            <ul className={styles['mobile-drawer-ul']}>

                <li className={styles['mobile-drawer-li']}>
                    <Link to={'/'}>Home</Link>
                </li>

                <li className={styles['mobile-drawer-li']}>
                    <Link to={'/auctions'}>Auctions</Link>
                </li>

                <li className={styles['mobile-drawer-li']}>
                    <Link to={'/products'}>Marketplace</Link>
                </li>

                <li className={styles['mobile-drawer-li']}>
                    <Link to={'/drops'}>Drops</Link>
                </li>
            </ul>
            <Chatbox />
        </main>
    )
}

export default MobileDrawer;
