import styles from '../styles/components/CardsComponent.module.css'

export function CardsComponent() {
    return(
        <div className={styles.container}>
            <div className={styles.cards}>
                <img src="/images/js.png" />
                <div className={styles.retina}>
                    <p>
                    Javascript, sou bem familiarizado com ele, pois ele não tem um sintaxe muito complexa
                    </p>
                </div>
            </div>
            <div className={styles.cards}>
            <img src="/images/css.png" />
            <div className={styles.retina}>
                    <p>
                    Javascript, sou bem familiarizado com ele, pois ele não tem um sintaxe muito complexa
                    </p>
                </div>
            </div>
            <div className={styles.cards}>
            <img src="/images/react.png" />
            <div className={styles.retina}>
                    <p>
                    Javascript, sou bem familiarizado com ele, pois ele não tem um sintaxe muito complexa
                    </p>
                </div>
            </div>
            <div className={styles.cards}>
            <img src="/images/php.png" />
            <div className={styles.retina}>
                    <p>
                    <strong>Javascript, sou bem familiarizado com ele, pois ele não tem um sintaxe muito complexa</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}