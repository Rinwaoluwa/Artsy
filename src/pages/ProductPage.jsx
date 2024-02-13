import { Link } from "react-router-dom";
import Filter from "../components/Filter"
import Footer from '../components/Footer';
import LeftSidebar from "../components/LeftSidebar";
import LoadMore from '../components/LoadMore';
import Navigation from '../components/Navigation';
import PageRoutes from '../components/PageRoutes';
import Product from '../components/Product';
import styles from './ProductPage.module.css';
// ₦
function ProductPage() {

    return (
        <main className={styles['product-page']}>
            <Navigation />
            <PageRoutes />
            <h4 className={styles['product-page-results']}>Showing 1-5 of 18 results</h4>
                <Filter />
            <section className={styles['product-section']}>
                <LeftSidebar />
                <div className={styles['products']}>
                    {/* ISSUE with routing to Description Page "amchor" tag takes too much width*/}
                    <Link to={'/description'}>
                        <Product />
                    </Link>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
            <button className={styles['product-see-more']}>See more</button>
            <LoadMore />
            <Footer/>
        </main>
    )
}

export default ProductPage
