import "../animations.css"
import styles from "./GradientLoader.module.css"

function GradientLoader() {
  const handleClick = () => {
    window.location.reload();
  };
    return (
      <div className={styles['loader']} >
        <div className={`${styles['gradient-border']} animateGradient`} id={styles['box']}>Artsy</div>
        <h3 className={styles['reload']}>If this message does not go away, try
          <a className={styles['reload-link']} onClick={handleClick}>{' '}reloading.</a>
        </h3>
      </div>
    )
}

export default GradientLoader
