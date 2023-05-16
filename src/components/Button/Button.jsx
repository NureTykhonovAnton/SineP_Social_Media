import styles from './Button.module.css'
export const Button = ({children, color, extraClass, isOutlined, ...props}) => {
    const COLORS = {
        red: styles.Red,
        blue: styles.Blue,
        orange: styles.Orange,
        white : styles.White,
        transparent: styles.Transparent
    }

    const outlinedStyles = isOutlined ? styles.OutlinedButton : ' ';

    return (
        <button type={'button'} className={styles.Button + ' ' + COLORS[color] + ' ' + outlinedStyles + ' ' + extraClass}
                {...props}
        >
            {children}
        </button>
    );
}
