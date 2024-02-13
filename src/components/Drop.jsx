import styles from "./Drop.module.css"

function Drop({event, access}) {
    return (
        <figure className={styles['drop']}>
            <div className={styles['drop-art']}>
                <div className={styles['drop-art-image-container']}>
                    <img src="/images/drop.png" alt="Art Figure" className={styles['drop-art-image']}/>
                    <div className={styles['drop-art-event']} style={{backgroundColor: "var(--color-2)"}}>
                        {event}
                    </div>
                </div>
                {/* CREATE FUNCTIONALITY TO CHANGE BACKGROUND  COLOR*/}
                {/* ACCORDING TO EVENT TYPE */}
                <div className={styles['drop-art-timeline']}>
                    <div className={styles['drop-art-time-left']}>Time Remaining</div>
                    <div className={styles['drop-art-timer']}>06 hrs : 45 min : 22 s</div>
                </div>
            </div>
            <figcaption className={styles['drop-art-caption']}>
                <p className={styles['drop-art-date']}>November 21 at 11 am WAT</p>
                <h3 className={styles['drop-art-title']}>Eyo : Eko For Show</h3>
                <p className={styles['drop-art-text']}>
                    Lorem ipsum dolor sit amet consectetur.
                    Amet odio a aenean quis vitae tempus.
                    Sed nunc tempus aliquet lectus ut vulputate.
                </p>
                <h3 className={styles['drop-art-creator']}>Creator:  <a href="#">Rinwa</a> </h3>
                <a href="#" className={styles['drop-art-get-notified']}>{access}</a>
            </figcaption>
        </figure>
    )
}

export default Drop
