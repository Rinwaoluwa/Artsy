import Navigation from "../components/Navigation";
import styles from "./ThankyouPage.module.css";

function ThankyouPage() {
    return (
        <main className={styles['thankyou-page']}>
            <Navigation />
            <section className={styles['thankyou']} >
                <div className={styles['blurs']}>
                    <div className={styles['blur-1']}></div>
                    <div className={styles['blur-2']}></div>
                    <div className={styles['blur-3']}></div>
                </div>
                <img src="/images/thankyou.png" alt="Thank you for shopping" className={styles['thankyou-image']}/>

            </section>
            <p className={styles['thankyou-text-1']}>Hey Celestine, thank you for your purchase.</p>
            <p className={styles['thankyou-text-2']}>You are amazing cheers to being <a href="#">ARTSY!</a>🎉</p>
        </main>
    )
}

export default ThankyouPage
