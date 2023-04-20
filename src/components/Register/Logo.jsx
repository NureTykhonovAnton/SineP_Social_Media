import logo from '../../images/logo.png'

export const Logo = ({extraStyles}) => {
    return (
        <img src={logo} alt="Logo" className={'w-[120%]' + ' ' + extraStyles}/>
    );
}
