import Search from "./Search";
import styles from "./SearchBar.module.css";

function SearchBar({placeholder}) {
    return (
        <div className={styles['searchbar']}>
            <Search />
            <input type="text" placeholder={placeholder} className={styles['searchbar-input']}/>
        </div>
    )
}

export default SearchBar
