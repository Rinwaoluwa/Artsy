import styles from "./Checkbox.module.css"
import CheckmarkIcon from "./CheckmarkIcon"

function Checkbox({children}) {

    return (
        <label htmlFor="event" className={styles['checkbox']} >
            <div className={styles['custom-checkbox']}>
                <input type="checkbox" name="" id="event" className={styles['real-checkbox']} />
                <CheckmarkIcon />
            </div>
            {children}
        </label>
    )
}

export default Checkbox
