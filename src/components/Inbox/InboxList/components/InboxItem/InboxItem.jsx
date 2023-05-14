import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

export const InboxItem = ({img, name, description, extraClass = ''}) => {
    return (
        <>
            <Divider variant={'middle'} sx={{
                margin: '1rem'
            }}/>
            <div className={' ' + extraClass}>
                <div className={'flex items-center'}>
                    <Avatar sx={{
                        width: '30px',
                        height: '30px'
                    }}>
                        C
                    </Avatar>
                    <span className={'ml-2 text-xs text-gray-400'}>{name}</span>
                </div>

                <p className={'text-sm'}>
                    {description}
                </p>
            </div>
        </>

    );
}
