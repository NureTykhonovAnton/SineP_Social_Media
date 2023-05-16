import Avatar from "@mui/material/Avatar";
import {Button} from "@mui/material";

export const CommunitiesList = ({communitiesList}) => {
    return (
        <>
            {
                communitiesList.map(({img, name}) => {
                    return <Button className={'flex items-center'}
                                   sx={{
                                       color: 'white',
                                       width: '100%'
                                   }}
                    >
                        <Avatar
                            sx={{
                                width: '30px',
                                height: '30px'
                            }}
                        >
                            C
                        </Avatar>
                        <span className={'text-white text-xs ml-2'}>{name}</span>
                    </Button>
                })
            }
        </>
    );
}
