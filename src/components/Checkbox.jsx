import styles from "./Checkbox.module.css"
import CheckmarkIcon from "./CheckmarkIcon"

function Checkbox({children}) {

    return (
        <label htmlFor="event" className={styles['checkbox']} >
            <div className={styles['custom-checkbox']}>
                <input type="checkbox" name="" id="event" className={styles['real-checkbox']}/>
                {/* css is the one adding the checkmark and it's causing a bug */}
                {/* where only 1 box can be checked at a time */}
                <CheckmarkIcon />
            </div>
            {children}
        </label>
    )
}

export default Checkbox
