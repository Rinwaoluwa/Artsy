/* eslint-disable react/prop-types */
import FeaturedItem from './FeaturedItem';
import styles from './FeaturedProducts.module.css';


function FeaturedProducts () {
    return (
        <section className={styles['featured-products']}>
            <h2 className={styles['featured-products-text']}>Featured products</h2>
                {/* THERE IS A DEFAULT STYLE FOR UL TAGs SOMEWHERRE THAT IS CAUING ALL UL TAGS */}
                {/* TO HAVE UNWANTED MARGINS TILL WE FIND A SOLUTION WE'LL USE DIV TAGS */}
            <div className={styles['featured-products-list']}>
                <FeaturedItem />
                <FeaturedItem />
                <FeaturedItem />
            </div>
        </section>
    )
}

export default FeaturedProducts;