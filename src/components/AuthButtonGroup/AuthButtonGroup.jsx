import {Button} from "../Button/Button";

export const AuthButtonGroup = ({signIn, handleClick, handleGoogleClick, color = 'red'}) => {
    return (
        <div className={'flex flex-col w-[100%] mt-3'}>
            <Button color={color}
                onClick={handleClick}
            >
                {signIn ? 'Sign in' : 'Log in'}
            </Button>
            <Button color={color} extraClass={'mt-2'}
                    onClick={handleGoogleClick}
            >
                Google
            </Button>
        </div>
    );
}
