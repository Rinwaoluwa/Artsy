import styles from "./Gallery.module.css";

function Gallery() {
    return (
        <>
            {/* CONSIDER GETTING THIS IMAGES FROM AN AFRICAN CULTURE ART API */}
            <section className={styles['gallery-mobile']}>
                <span className={`${styles['blur']} ${styles['blue-blur']}`}></span>
                <figure className={styles['gallery-container']}>
                    <img className={styles['photo--1']} src="/mobile/mobile-1.png" alt="Maybe a Person on a Chair" />
                    <img className={styles['photo--2']} src="/mobile/mobile-2.png" alt="Maybe Red Flowers" />
                    <img className={styles['photo--3']} src="/mobile/mobile-3.png" alt="Maybe a perosn with a flower" />
                </figure>
                <span className={`${styles['blur']} ${styles['red-blur']}`}></span>
                <span className={`${styles['blur']} ${styles['pink-blur']}`}></span>
            </section>

            <section className={styles['gallery-desktop']}>
                <img className={styles['gallery-desktop-image']} src="/web/web1.png" alt="Homepage Gallery" />
                <img className={styles['gallery-desktop-image']} src="/web/web2.png" alt="Homepage Gallery" />
                <img className={styles['gallery-desktop-image']} src="/web/web3.png" alt="Homepage Gallery" />
                <img className={styles['gallery-desktop-image']} src="/web/web4.png" alt="Homepage Gallery" />
                <img className={styles['gallery-desktop-image']} src="/web/web5.png" alt="Homepage Gallery" />
            </section>
        </>
    )
}

export default Gallery;