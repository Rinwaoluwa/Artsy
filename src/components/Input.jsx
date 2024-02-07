import styles from "./Input.module.css";

function Input({name}) {
    return (
        <div className={styles['form']} >
            <label htmlFor="event" className={styles['label']}>{name}</label>
            <input id="event" type="text" className={styles['input']}/>
        </div>
    )
}

export default Input
