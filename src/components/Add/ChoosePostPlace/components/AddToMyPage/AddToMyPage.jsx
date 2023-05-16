import {Button} from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import Divider from "@mui/material/Divider";

export const AddToMyPage = () => {
    return (
        <div className={'flex flex-col items-start w-full'}>
            <Button startIcon={<AccountBoxOutlinedIcon/>}
                    sx={{
                        color: 'white',
                        width: '100%'
                    }}
            >
                Add to My Page
            </Button>
            <Divider variant={'middle'}
                     sx={{
                         color: '#121212',
                         width: '90%',
                         margin: '1rem'
                     }}
            />
        </div>
    );
}
