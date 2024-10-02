import styles from './Avatar.module.css';

export function Avatar({hasBorder = true, src}) { /*Desestruturação */
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} /*If para se tiver borda aplicar um CSS caso não o outro*/
        src={src}
        />
    );
}