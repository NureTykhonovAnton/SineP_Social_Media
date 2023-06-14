import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {VoteButtonGroup} from "./components/VoteButtonGroup/VoteButtonGroup";
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import {Button, CardActionArea} from "@mui/material";
import {SwipeableEdgeDrawer} from "../SwipeableEdgeDrawer/SwipeableEdgeDrawer";
import {useState} from "react";

export default function Post({photoSrc, isProfile = false}) {
    const [open, setOpen] = React.useState(false);
    const [full, setFull] = useState(false);

    const handleFull = () => {
        setFull(prevState => !prevState);
    }

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const setMinHeight = () => {
        if(isProfile && full){
            return '28rem';
        } else if (isProfile){
            return '10rem';
        } else {
            return ''
        }
    }

    const onOpen = toggleDrawer(true);


    return (
        <>
            <Card
                sx={{
                    maxWidth: 560,
                    my: '0.3rem',
                    flex: 1,
                    minHeight: setMinHeight(isProfile),
                    transition: '0.2s ease-in'
                }}
            >
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardActionArea onClick={handleFull}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={photoSrc}
                        alt="Paella dish"
                        sx={{
                            height: '13rem'
                        }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions disableSpacing
                             sx={{
                                 display: 'flex',
                                 justifyContent: 'space-between'
                             }}
                >
                    <VoteButtonGroup/>
                    <Button startIcon={<ChatBubbleOutlineRoundedIcon/>}
                            onClick={onOpen}
                            sx={{
                                opacity: 0.6,
                                color: 'white',
                                fontSize: '0.75rem'
                            }}
                    >
                        31
                    </Button>
                    <Button startIcon={<ShareOutlinedIcon/>}
                            onClick={onOpen}
                            sx={{
                                opacity: 0.6,
                                color: 'white',
                                fontSize: '0.75rem'
                            }}
                    >
                        Share
                    </Button>
                </CardActions>
            </Card>
            <SwipeableEdgeDrawer toggleDrawer={toggleDrawer} open={open}/>
        </>
    );
}
