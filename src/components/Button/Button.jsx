import styles from './Button.module.css'
export const Button = ({children, color, extraClass, ...props}) => {
    const COLORS = {
        red: styles.Red,
        blue: styles.Blue,
        orange: styles.Orange,
        white : styles.White,
        transparent: styles.Transparent
    }


    return (
        <button type={'button'} className={styles.Button + ' ' + COLORS[color] + ' ' + extraClass}
                {...props}
        >
            {children}
        </button>
    );
}
