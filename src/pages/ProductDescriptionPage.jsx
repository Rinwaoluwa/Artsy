import ArrowHeadLeft from "../components/ArrowHeadLeft";
import Button from "../components/Button";
import Heart from "../components/Heart";
import Navigation from "../components/Navigation";
import PageRoutes from "../components/PageRoutes";
import Product from '../components/Product';
import Diamond from "../components/diamond";
import styles from "./ProductDescriptionPage.module.css"

function ProductDescriptionPage() {
    return (
        <main className={styles['product-description-page']}>
            <Navigation />
            <PageRoutes />

            <section className={styles['product-description-section']}>
                <div className={styles['product-item']}>
                    <Product />

                    <div className={styles['product-description-container']}>
                        <div className={styles['product-description']}>
                            <h3 className={styles['product-creator']}>Creator: <a href="#">Rinwaoluwa</a></h3>
                            <li className={styles['product-country']}>Made in Italy</li>
                            <li className={styles['product-views']}>Total views: 1.7k</li>

                            <div className={`${styles['product-purchase']} ${styles['product-stats']}`}>
                                <span className={styles['product-decrease']}>-</span>
                                <h2 className={styles['product-count']}>1</h2>
                                <span className={styles['product-increase']}>+</span>
                            </div>
                            <div className={styles['product-purchase']}>
                                <Button>Add to cart</Button>
                                <button className={styles['product-wishlist']}><Heart /></button>
                            </div>
                        </div>

                        <div className={styles['product-about']}>
                            <div className={styles['product-about-text']}><span>Description</span> <span className="down-arrow"> <ArrowHeadLeft /> </span> </div>
                            <div className={styles['product-about-text']}><span>Listings</span> <span className="down-arrow"> <ArrowHeadLeft /> </span></div>
                            <div className={`${styles['product-about-text']} ${styles['product-about-text--1']}`}><span>Status</span> <span className="down-arrow"> <ArrowHeadLeft /> </span></div>
                        </div>
                    </div>
                </div>

                <div className={styles['product-more-from-collection_Desktop']}>
                    <h3 className={styles['product-mfc-text_Desktop']}>
                        Explore more from this collection
                    </h3>

                        <div className={`${styles['arrow-left_Desktop']}
                            ${styles['product-arrow-left_Desktop']}`
                        }>
                            <ArrowHeadLeft />
                        </div>

                        <div className={`${styles['arrow-right_Desktop']}
                            ${styles['product-arrow-right_Desktop']}`
                        }>
                            <ArrowHeadLeft />
                        </div>
                </div>

                <div className={styles['product-more-from-collection']}>
                    <h3 className={styles['product-mfc-text']}>More from this collection</h3>
                    <figure className={styles['product-mfc-image-container']}>
                        <div className={styles['product-heart-icon']}>
                            <Heart />
                        </div>
                        <div className={`arrow-left ${styles['product-arrow-left']}`}>
                            <ArrowHeadLeft />
                        </div>
                        <div className={`arrow-right ${styles['product-arrow-right']}`}>
                            <ArrowHeadLeft />
                        </div>
                        <img src="/images/mfc.png" alt="More collection" className={styles['product-mfc-image']}/>
                        <figcaption className={styles['product-mfc-caption']}>
                            <span className={styles['product-mfc-caption-text']}>Sassy</span>
                            <span className={styles['product-mfc-caption-text']}><Diamond />3.20</span>
                        </figcaption>
                    </figure>
                    <figure className={styles['product-mfc-image-container']}>
                        <div className={styles['product-heart-icon']}>
                            <Heart />
                        </div>
                        <div className={`arrow-left ${styles['product-arrow-left']}`}>
                            <ArrowHeadLeft />
                        </div>
                        <div className={`arrow-right ${styles['product-arrow-right']}`}>
                            <ArrowHeadLeft />
                        </div>
                        <img src="/images/mfc.png" alt="More collection" className={styles['product-mfc-image']}/>
                        <figcaption className={styles['product-mfc-caption']}>
                            <span className={styles['product-mfc-caption-text']}>Sassy</span>
                            <span className={styles['product-mfc-caption-text']}><Diamond />3.20</span>
                        </figcaption>
                    </figure>
                    <figure className={styles['product-mfc-image-container']}>
                        <div className={styles['product-heart-icon']}>
                            <Heart />
                        </div>
                        <div className={`arrow-left ${styles['product-arrow-left']}`}>
                            <ArrowHeadLeft />
                        </div>
                        <div className={`arrow-right ${styles['product-arrow-right']}`}>
                            <ArrowHeadLeft />
                        </div>
                        <img src="/images/mfc.png" alt="More collection" className={styles['product-mfc-image']}/>
                        <figcaption className={styles['product-mfc-caption']}>
                            <span className={styles['product-mfc-caption-text']}>Sassy</span>
                            <span className={styles['product-mfc-caption-text']}><Diamond />3.20</span>
                        </figcaption>
                    </figure>
                    <figure className={styles['product-mfc-image-container']}>
                        <div className={styles['product-heart-icon']}>
                            <Heart />
                        </div>
                        <div className={`arrow-left ${styles['product-arrow-left']}`}>
                            <ArrowHeadLeft />
                        </div>
                        <div className={`arrow-right ${styles['product-arrow-right']}`}>
                            <ArrowHeadLeft />
                        </div>
                        <img src="/images/mfc.png" alt="More collection" className={styles['product-mfc-image']}/>
                        <figcaption className={styles['product-mfc-caption']}>
                            <span className={styles['product-mfc-caption-text']}>Sassy</span>
                            <span className={styles['product-mfc-caption-text']}><Diamond />3.20</span>
                        </figcaption>
                    </figure>
                    <figure className={styles['product-mfc-image-container']}>
                        <div className={styles['product-heart-icon']}>
                            <Heart />
                        </div>
                        <div className={`arrow-left ${styles['product-arrow-left']}`}>
                            <ArrowHeadLeft />
                        </div>
                        <div className={`arrow-right ${styles['product-arrow-right']}`}>
                            <ArrowHeadLeft />
                        </div>
                        <img src="/images/mfc.png" alt="More collection" className={styles['product-mfc-image']}/>
                        <figcaption className={styles['product-mfc-caption']}>
                            <span className={styles['product-mfc-caption-text']}>Sassy</span>
                            <span className={styles['product-mfc-caption-text']}><Diamond />3.20</span>
                        </figcaption>
                    </figure>
                </div>
                    <button className={styles['product-explore-all']}>Explore all</button>
            </section>
        </main>
    )
}

export default ProductDescriptionPage
