import styles from "./Filter.module.css"
import Search from "./Search"

function Filter() {
    return (
        <>
            <div className={styles['filter']}>
                <select className={styles['fiter-product']} name="" id="">
                    <option value="">Filter</option>
                    <option value="">3</option>
                    <option value="">7</option>
                </select>

                <select className={styles['sort-product']} name="" id="">
                    <option value="">Sort by</option>
                    <option value="">4</option>
                    <option value="">6</option>
                </select>

            </div>
            <div className={styles['filter-desktop']}>
                <div className={styles['fiter-products']}>
                    <Search fill={'var(--color-5)'}/>
                    <input type="text" placeholder="Search" className={styles['fiter-products-input']}/>
                </div>
                <div className={styles['sort-products']}>
                    <span className={styles['sort-results']}>See 1-6 of 15 results</span>
                    <select className={styles['sort-product-desktop']} name="" id="">
                        <option value="">Sort by</option>
                        <option value="">4</option>
                        <option value="">6</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filter
