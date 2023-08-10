
import styles from './Card.module.css';

function Card({title, count, theme}) {
    return (
        <div className={`${styles.harchi1} ${styles.harchi2}`}>
            <img src="next.svg" />
            <h3>{title} {count}</h3>
            <p>HELLO NEXT APP AND REACT WORLD</p>
            <a className={styles.button}>CLICK ME FOR DETAILS</a>
        </div>
    )
}



export default Card;