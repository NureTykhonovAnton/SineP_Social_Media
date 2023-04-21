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
import {Button} from "@mui/material";
import {SwipeableEdgeDrawer} from "../SwipeableEdgeDrawer/SwipeableEdgeDrawer";

export default function Post({photoSrc}) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const onOpen = toggleDrawer(true);


    return (
        <>
            <Card
                sx={{
                    maxWidth: 560,
                    my: '0.3rem'
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
                <CardMedia
                    component="img"
                    height="194"
                    image={photoSrc}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
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
