import ForwardArrowIcon from "./ForwardArrowIcon";

import styles from "./FeaturedItem.module.css";

function FeaturedItem() {
    return (
        <li className={styles['featured-product-list-item']}>
            <figure className={'featured-product-image-container'}>
                <div className={styles['featured-product-image']}>
                    <img className={styles['featured--image']} src={"../src/assets/cart/Frame59.png"} alt="Product Image"  />
                    <span className={styles['feature-links']}>
                        <span className={styles['featured--text']}>Boolean Egyptian</span>
                        <a href="#" className={styles['feature-link']}><ForwardArrowIcon fill='#fff' /></a>
                    </span>
                </div>
                <figcaption className={styles['featured-product-caption']}>
                    <p className={styles['featured-product-paragraph']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus magna
                        fringilla urna, porttitor rhoncus dolor pur
                    </p>
                    <div className={styles['featured-product-creators']}>
                        <div className={styles['featured-creators']}>
                            <img className={styles['featured-creator-image']} src="../src/assets/cart/picocito.JPG" alt="Creator Image" />
                            <img className={styles['featured-creator-image']} src="../src/assets/cart/picocito.JPG" alt="Creator Image" />
                            <img className={styles['featured-creator-image']} src="../src/assets/cart/picocito.JPG" alt="Creator Image" />
                        </div>
                        <h4 className={styles['featured-creators-number']}>64 major creators</h4>
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}

export default FeaturedItem
