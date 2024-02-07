/* eslint-disable react/prop-types */
import styles from './FeaturedProducts.module.css';
import ForwardArrowIcon from './ForwardArrowIcon';

function FeaturedProducts () {
    return (
        <section className={styles['featured-products']}>
                <h2 className={styles['featured-products-text']}>Featured products</h2>
                {/* THERE IS A DEFAULT STYLE FOR UL TAGs SOMEWHERRE THAT IS CAUING ALL UL TAGS */}
                {/* TO HAVE UNWANTED MARGINS TILL WE FIND A SOLUTION WE'LL USE DIV TAGS */}
                <div className={styles['featured-products-list']}>
                    <FeaturedProduct />
                    <FeaturedProduct />
                    <FeaturedProduct />
                </div>
            </section>
    )
}

function FeaturedProduct() {
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

export default FeaturedProducts;