import {Button, TextField} from "@mui/material";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import {CreateForm} from "../../components/CreateCommunity/CreateForm/CreateForm";
import {useNavigate} from "react-router";
import {GROUP} from "../../uutils/consts";


export const CreateCommunity = ({}) => {
    const [photoValue, setPhotoValue] = useState(null);
    const navigate = useNavigate();

    const navigateToGroup =  () => {
        navigate(`${GROUP}`);
    }


    return (
        <section
            className={'pt-12 pb-20 flex items-center justify-between flex-col flex-wrap w-full h-[100vh] text-white'}>
            <h1 className={'text-2xl'}>Creating a community</h1>
            <CreateForm setPhotoValue={setPhotoValue}/>
            <Button
                sx={{
                    color: 'white'
                }}
                onClick={navigateToGroup}
            >
                Create
            </Button>
        </section>
    );
}
