import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}> 

        <img src="https://avatars.githubusercontent.com/u/80010933?v=4"/>

        <div className={styles.commentBox}> 
            <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Diego Oliveira</strong>
                    <time title="01 de Outubro às 11:25" dateTime="2024-10-01 11:25:30"> Cerca há 1 hora atrás</time>
                </div>
                <button title="Deletar comentário">
                    <Trash size={20} />
                </button>
            </header>
            <p>Muito Bom Devon, Parabéns</p>
            </div>
            <footer>
            <button> 
                <ThumbsUp/> 
                Aplaudir <span>24</span>
            </button>
            </footer>
        </div>
        </div>
    );
}