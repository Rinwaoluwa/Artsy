import LocationIcon from './LocationIcon';
import MailIcon from './MailIcon';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className={styles['footer-page']}>
            <div className={styles['footer']}>
                <h1 className={styles['footer--newsetter-text']}>NewsLetter</h1>
                <h3 className={styles['footer--subscribe-text']}>SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS</h3>
                <form className={styles['footer--form']} action="" method="post" >
                    <input className={styles['footer--form-input-text']} type="email" placeholder="ENTER YOUR EMAIL HERE" id="" name='email'/>
                    <button className={styles['footer--submit-btn']}>SUBSCRIBE</button>
                </form>

            </div>
            <div className={styles['contact-us']} >
                <h4 className={styles['contact-us-text']}>REACH US</h4>
                <li className={styles['contact-us-list-item']}> <MailIcon /><a href="mailto:peterodejobi9@gmail.com">peterodejobi9@gmail.com</a></li>
                <li className={styles['contact-us-list-item']}> <LocationIcon /> <strong>Lagos, Nigeria.</strong></li>
            </div>

            {/* Desktop Screen */}
            <section className={styles['footer-desktop']}>
                <h1 className={styles['footer-desktop-artsy-text']}>ARTSY.</h1>

                <div className={styles['footer-desktop-widgets']}>
                    <ul className={styles['footer-desktop-widget']}>
                        <li className={styles['widget-item']}>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className={styles['widget-item']}>
                            <Link to={'/products'}>Marketplace</Link>
                        </li>
                        <li className={styles['widget-item']}>
                            <Link to={'/auctions'}>Auctions</Link>
                        </li>
                        <li className={styles['widget-item']}>
                            <Link to={'/drops'}>Drops</Link>
                        </li>
                    </ul>
                    <ul className={styles['footer-desktop-widget']}>
                        <li className={styles['widget-item']}>Blog</li>
                        <li className={styles['widget-item']}>Wallets</li>
                        {/* Get an Api that tell rates and dicovers the country a user is in */}
                        <li className={styles['widget-item']}>Rates</li>
                        <li className={styles['widget-item']}>High Bids</li>
                    </ul>
                </div>

                <div className={styles['footer-desktop-contact-us']}>
                    <li className={styles['contact-us-list-item']}>
                        <MailIcon /><a href="mailto:peterodejobi9@gmail.com">peterodejobi9@gmail.com</a>
                    </li>
                    <li className={styles['contact-us-list-item']}>
                        <LocationIcon /> <strong>Lagos, Nigeria.</strong>
                    </li>
                </div>
            </section>
            <h3 className={`${styles['footer-desktop']} ${styles['footer-text']}`}>Artsystudios © 2024. All Rights Reserved.</h3>
        </footer>
    )
}

export default Footer
