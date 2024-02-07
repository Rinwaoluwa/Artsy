import styles from './PageRoutes.module.css'
function PageRoutes() {
    return (
        <>
            <div className={styles['page-route']}>
                <h3 className={styles['page-route-index']}>Home/</h3>
                <h3 className={styles['page-route-index']}>Marketplace/</h3>
                <h3 className={styles['page-route-index']}>Editorials</h3>
            </div>
            
        </>
    )
}

export default PageRoutes
