import styles from "./Select.module.css";

function Select({name, option}) {
    return (
        <div className={styles['selection']} >
            <label htmlFor="type" className={styles['label']}>{name}</label>
            <select name="" id="type" className={styles['select']}>
                <option value="">Nigeria</option>
                <option value="">{option}</option>
                <option value="">{option}</option>
            </select>
        </div>
    )
}

export default Select
