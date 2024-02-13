import styles from './Introduction-text.module.css'

function IntroductionText() {
    return (
        <div className={styles['introduction-text']}>
            <h1 className={styles['intro-text--1']}>Photography is poetry and beautiful
                <br /> untold stories
            </h1>
            <p className={styles['intro-text--2']}>Flip through more than 10,000 vintage shots, old
                photograghs, historic images and captures seamlessly in one place. Register to get top access.
            </p>
        </div>
    )
}

export default IntroductionText;
