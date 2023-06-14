import {Button} from "@mui/material";
import {useState} from "react";

export const ShortDescription = ({description, isGroup = false}) => {
    const [joined, setJoined] = useState(false);

    const handleJoinClick = () => {
        setJoined(prevState => !prevState);
    };

    return (
        <section className={'text-sm flex justify-between'}>
            <div className={'text-white opacity-20'}>
                <span>
                Bio:
                 </span>
                <p>
                    {description}
                </p>
            </div>
            {
                isGroup ? <Button size={'small'} variant={joined ? 'outlined' : 'contained'} onClick={handleJoinClick}>
                        {
                            joined ? 'Joined': 'Join'
                        }
                    </Button>
                    :
                    <Button size={'small'} sx={{
                        color: 'lightblue',
                        textDecoration: 'underline'
                    }}>
                        Change
                    </Button>
            }
        </section>
    );
}
