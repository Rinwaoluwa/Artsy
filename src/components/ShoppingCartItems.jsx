import ShoppingCartItem from "../components/ShoppingCartItem";
import styles from "./ShoppingCartItems.module.css";

function ShoppingCartItems() {
    return (
        // MAKE AN INTERSECTION OBSERVER WHEN THIS IS 20% IN VIEW THE ARROW ICON SHOLD ROTATE 270DEG
        <div className={styles['shopping-cart-items']}>
            <ShoppingCartItem />
            <ShoppingCartItem />
            <ShoppingCartItem />
            <ShoppingCartItem />
            <ShoppingCartItem />
        </div>
    )
}

export default ShoppingCartItems
