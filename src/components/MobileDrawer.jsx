import { useState } from 'react'
import { Link } from 'react-router-dom'

import ArtsyText from './ArtsyText'
import CloseX from './CloseX'
import Chatbox from './Chatbox'
import FakeChatSupport from './FakeChatSupport'

import styles from './MobileDrawer.module.css'

function MobileDrawer() {
    const [showChatSupport, setShowChatSupport] = useState(false);

    return (
        <main className={styles['mobile-drawer-nav-container']}>
            <nav className={styles['mobile-drawer-nav']}>
                <ArtsyText />
                <Link to='/'>
                    <CloseX />
                </Link>
            </nav>
            <ul className={styles['mobile-drawer-ul']}>

                <li className={styles['mobile-drawer-li']}>
                    <Link to='/'>Home</Link>
                </li>

                <li className={styles['mobile-drawer-li']}>
                    <Link to='/auctions'>Auctions</Link>
                </li>

                <li className={styles['mobile-drawer-li']}>
                    <Link to='/product'>Marketplace</Link>
                </li>

                <li className={styles['mobile-drawer-li']}>
                    <Link to='/drops'>Drops</Link>
                </li>
            </ul>
            <div onClick={() => setShowChatSupport(true)}>
                <Chatbox />
            </div>
            {showChatSupport && <FakeChatSupport openSupport={setShowChatSupport}/>}
        </main>
    )
}

export default MobileDrawer;
