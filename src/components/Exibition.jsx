import styles from './Exibition.module.css'

function Exibition() {
    return (
        <section className={styles['exibition-container']}>
            <h3 className={styles['exibition-desktop']}>See Upcoming Auctions and Exhibitions</h3>
            <figure className={styles['exibition-container-image']}>
                <img className={styles['exibition-image']} src="/images/sectionbids.jpg" alt="Maybe an Image of people" />
                <figcaption className={styles['exibition-caption']}>
                    <h3 className={styles['exibition-caption--text-1']}>MONALISA REDEFINED IN STYLE.</h3>
                    <h4 className={styles['exibition-caption--text-2']}>START ON : 08:00 GTS . Monday</h4>
                    <p className={styles['exibition-caption--text-3']}>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND
                        AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
                    </p>
                    <div className={styles['exibition-btns']}>
                        <a href='#' className={styles['exibition-seemore-btn']}>See more</a>
                        <button href='#' className={styles['exibition-set-reminder-btn']}>Set a reminder</button>
                    </div>
                </figcaption>
            </figure>
        </section>
    )
}

export default Exibition;
