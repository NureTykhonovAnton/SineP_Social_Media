import LinkIcon from '@mui/icons-material/Link';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import IconButton from "@mui/material/IconButton";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import {Button} from "@mui/material";


export const FooterButtonGroup = ({setLoadedImg, handleDataChange}) => {
    const readUrl = (input) => {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                setLoadedImg(e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
            handleDataChange(input, 'photo');
        }
    }

    return (
        <section className={'flex flex-row items-start w-full bg-[#121212] mb-[-1rem] pb-[.5rem]'}>

            <Button variant="" component={"label"} startIcon={<ImageOutlinedIcon/>} sx={{
                color: 'white'
            }}>
                <input hidden accept="image/*" type="file"
                       onChange={e => readUrl(e.target)}/>
            </Button>

            <Button variant="" component={"label"} startIcon={<SlideshowOutlinedIcon/>} sx={{
                color: 'white'
            }}>
                <input hidden accept="video/*" type="file"
                       onChange={e => readUrl(e.target)}/>
            </Button>

        </section>
    );
}
