import Avatar from "@mui/material/Avatar";

export const AccountNameSection = ({nickname, accountPhotoSrc = '', extraStyles}) => {
    return (
        <section className={'flex text-white w-1/2 ' + extraStyles}>
            <Avatar src={accountPhotoSrc} sx={{
                width: '60px',
                height: '60px'
            }}>
                A
            </Avatar>
            <span className={'text-xl mt-9'}>
                {nickname}
            </span>
        </section>
    );
}
