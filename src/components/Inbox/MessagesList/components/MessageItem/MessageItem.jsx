import Divider from "@mui/material/Divider";
import EmailIcon from '@mui/icons-material/Email';

export const MessageItem = ({name, description, extraClass = ''}) => {
    return (
        <>
            <Divider variant={'middle'} sx={{
                margin: '1rem'
            }}/>
            <div className={' ' + extraClass}>
                <div className={'flex items-center'}>
                    <EmailIcon/>
                    <span className={'ml-2 text-xs text-gray-400'}>from {name}</span>
                </div>

                <p className={'text-sm'}>
                    {description}
                </p>
            </div>
        </>

    );
}
