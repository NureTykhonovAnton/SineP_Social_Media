import Avatar from "@mui/material/Avatar";
import {styled} from "@mui/material/styles";
import {Badge} from "@mui/material";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
export const ChatUser = ({name, message, status, img = ''}) => {
    return (
        <div className={'flex flex-row items-center my-2 justify-between w-full'}>
            <div className={'flex flex-row items-center'}>
                {
                    status ?
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                            sx={{
                                '& .MuiBadge-badge': {
                                    zIndex: 10
                                }
                            }}
                        >
                            <Avatar alt={name}
                            sx={{
                                zIndex: 5
                            }}
                            />
                        </StyledBadge>
                        :
                        <Avatar
                            alt={name}
                            sx={{
                                zIndex: 5
                            }}
                        />
                }
                <div className={'flex flex-col ml-2'}>
                    <span className={'text-[#595959] text-xs'}>{name}</span>
                    <span className={'text-gray-400 text-xs'}>
                    {message}
                </span>
                </div>
            </div>
            <span>
                {
                    status ?
                        <span className={'text-green-500 text-xs'}>Online</span>
                        :
                        <span className={'text-[#595959] text-xs'}>Offline</span>
                }
            </span>
        </div>
    );
}
