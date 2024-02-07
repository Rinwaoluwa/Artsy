import ArtsyText from '../components/ArtsyText'
import CloseX from '../components/CloseX'
import Chatbox from '../components/Chatbox'
import styles from './MobileDrawer.module.css'

function MobileDrawer() {
    return (
        <main className={styles['mobile-drawer-nav-container']}>
            <nav className={styles['mobile-drawer-nav']}> <ArtsyText /> <CloseX /> </nav>
                <ul className={styles['mobile-drawer-ul']}>
                    <li className={styles['mobile-drawer-li']}>Home</li>
                    <li className={styles['mobile-drawer-li']}>Auctions</li>
                    <li className={styles['mobile-drawer-li']}>Marketplace</li>
                    <li className={styles['mobile-drawer-li']}>Drops</li>
                </ul>
            <Chatbox />
        </main>
    )
}

export default MobileDrawer;
