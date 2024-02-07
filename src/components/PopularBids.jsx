import Button from "./Button";
import Heart from "./Heart";
import styles from "./PopularBids.module.css"

function PopularBids() {
    return (
        <figure className={styles['popular-bid']}>
            <div className={styles['popular-bid-image-container']}>
                <div className={styles['popular-bid-wishlist']}>
                    <Heart />
                </div>
                <img src="/images/popularbid.png" alt="Art Bid" className={styles['popular-bid-image']}/>
                <div className={styles['popular-bid-texts']}>
                    <h3 className={styles['popular-bid-text']}>Out of the box</h3>
                    <h3 className={styles['popular-bid-text']}>0.57 ETH</h3>
                </div>
            </div>
            <figcaption className={'popular-bid-captions'}>
                <h3 className={styles['popular-bid-caption']}>Creator:  <a href="#">Rinwaoluwa</a> </h3>
                <h3 className={styles['popular-bid-caption']}>Date:  12/08/22</h3>
                <div className={styles['place-bid']}>
                    <div className={styles['current-bid']}>
                        <span className={styles['current-bid-text']}>Current Bid</span>
                        <span className={styles['current-bid-number']}>0.987 ETH</span>
                    </div>
                    <Button>Place Bid</Button>
                </div>
            </figcaption>
        </figure>
    )
}

export default PopularBids
