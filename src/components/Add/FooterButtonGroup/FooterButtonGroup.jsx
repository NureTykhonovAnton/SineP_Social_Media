import LinkIcon from '@mui/icons-material/Link';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import IconButton from "@mui/material/IconButton";


export const FooterButtonGroup = () => {
    return (
        <section className={'flex flex-row items-start w-full bg-[#121212] mb-[-1rem]'}>
            <IconButton
                sx={{
                    color: 'white'
                }}
            >
                <LinkIcon/>
            </IconButton>

            <IconButton
                sx={{
                    color: 'white'
                }}
            >
                <ImageOutlinedIcon/>
            </IconButton>

            <IconButton
                sx={{
                    color: 'white'
                }}
            >
                <SlideshowOutlinedIcon/>
            </IconButton>

        </section>
    );
}
