import {Button, TextField} from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

export const CreateForm = ({setPhotoValue}) => {
    return (
        <form className={'flex items-left flex-col w-1/2 h-[13rem] justify-around pt-3'}>
            <article>
                Name: <TextField
                variant={'standard'}
                sx={{
                    width: '60%',
                    '& .MuiInputBase-root': {
                        color: 'white'
                    },
                    '& .MuiTextField-root, .MuiInputBase-root': {
                        height: '1.5rem'
                    },
                    '.css-pis9hk-MuiInputBase-root-MuiInput-root:after': {
                        borderColor: 'white',
                    },
                }}
            />
            </article>
            <article className={'flex'}>
                <Button variant="outlined" startIcon={<AddPhotoAlternateOutlinedIcon/>} sx={{
                    color: 'white'
                }}>
                    Upload banner
                    <input hidden accept="image/*" type="file"
                           onChange={event => setPhotoValue(event.target.files[0])}/>
                </Button>
            </article>
        </form>
    );
}
