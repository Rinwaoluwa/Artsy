import styles from './Billboard.module.css';

function Billboard() {
    return (
        <section className={styles['billboard']}>
            <ul className={styles['billboard-list-items']}>
                <li className={styles['billboard-list-item']}>Editorials</li>
                <li className={styles['billboard-list-item']}>Fashion</li>
                <li className={styles['billboard-list-item']}>Lifestyle</li>
            </ul>

            <h2 className={styles['billboard-top-creators-text']}>TOP CREATORS OF THE WEEK</h2>
            <p className={styles['billboard-top-creators-paragraph']}>“Everything always looked better in black and white. Everything always as
                if it were the first time; there’s always more people in a black and white
                photograph. It just makes it seem that there were more people at a gig, more
                people at a football match, than with colour photography. Everything looks more
                exciting.”– Jack Lowden
            </p>

            <div className={styles['billboard-circa']}>
                <h1 className={styles['billboard-circa--1']}>CIRCA</h1>
                <h1 className={styles['billboard-circa--2']}> <s> 1985 </s> </h1>
            </div>

            <img src="/images/billboard-3.png" alt="Maybe Models" className={styles['billboard-image']}/>
        </section>
    )
}

export default Billboard;
