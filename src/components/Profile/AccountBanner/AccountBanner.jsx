import styles from './AccountBanner.module.css'

export const AccountBanner = ({src}) => {
    return (
        <div className={'w-full h-[10rem]'} style={{
            backgroundImage: `url("${src}")`,
            backgroundSize: 'cover',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px'
        }}>
        </div>
    );
}
