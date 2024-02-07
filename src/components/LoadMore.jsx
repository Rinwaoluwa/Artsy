import styles from './LoadMore.module.css'
import ForwardArrowIcon from './ForwardArrowIcon'
function LoadMore() {
    return (
        <button className={styles['load-more_btn']}>
           <h4 className={styles['load-more_text']}>Load more</h4>
           <ForwardArrowIcon />
        </button>
    )
}

export default LoadMore
