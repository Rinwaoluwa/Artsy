import Drop from "../components/Drop"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import styles from "./DropPage.module.css"

function DropPage() {
    return (
        <main className={styles['drop-page']}>
            <Navigation />
            <section className={styles['drop-page-section']}>
                <div className={styles['drop-page-cta']}>
                    <h1 className={styles['drop-page-text']}>Upcoming Drops</h1>
                    <p className={styles['drop-page-paragraph']}>You may turn on notifications so that no drop will miss you.</p>
                    <button className={styles['drop-page-btn']}>Notify Me</button>
                </div>
                <select name="" id="" className={styles['drop-page-sort']}>
                    <option value="xyx">Sort By</option>
                    <option value="xyx">1</option>
                    <option value="xyx">2</option>
                </select>
                <Drop event={'UPCOMING'} access={'Get notified'}/>
                <Drop event={'LIVE NOW'} access={'Join now'}/>
                <Drop event={'ENDED'} access={'View'}/>
                <Footer />
            </section>
        </main>
    )
}

export default DropPage
