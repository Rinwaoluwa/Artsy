import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Product() {
    return (
        <figure className={styles['art']}>
            <Link to='/description'>
                <img className={styles['art--image']} src={'/images/product.jpg'} alt="Art" />
                <figcaption className={styles['art--caption']}>
                    <h5 className={styles['art--caption-text']}>BOOLEAN EGYPT</h5>
                    <h5 className={styles['art--caption-text']}>₦210,000</h5>
                </figcaption>
            </Link>
        </figure>
    )
}

export default Product
