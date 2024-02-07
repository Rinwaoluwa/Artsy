import Checkbox from "./Checkbox";
import FilterIcon from "./FilterIcon";
import styles from "./LeftSidebar.module.css";

function LeftSidebar() {
    return (
        <div className={styles['left-sidebar']}>
            <div className={styles['filters']}>
                <FilterIcon />
                <p className={styles['filter-text']}>Filter</p>
            </div>

            <div className={styles['category']}>
                <h3 className={styles['category-text']}>By category</h3>
                <Checkbox>Editorials</Checkbox>
                <Checkbox>Fashion</Checkbox>
                <Checkbox>Optics</Checkbox>
                <Checkbox>Art & Museum</Checkbox>
                <Checkbox>Nature</Checkbox>
            </div>

            <div className={styles['category-range']}>
                <h3 className={styles['category-text']}>By Price</h3>
                <label htmlFor="price-range">
                    <p className={styles['price-amount']} >₦10,000 - ₦200,000</p>
                    <input type="range" name="" id="price-range" min={1} max={100} className={styles['price-range']}/>
                </label>
            </div>
        </div>
    )
}

export default LeftSidebar
