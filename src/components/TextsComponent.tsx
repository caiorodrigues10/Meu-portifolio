import styles from '../styles/components/TextsComponent.module.css';

export function TextsComponent(){
    return(
        <div className={styles.container}>
            <header>
                <span>Caio Henrique Rodrigues</span>
                <hr/>
                <text>Minhas Habilidades:</text>
            </header>
        </div>
    );
}