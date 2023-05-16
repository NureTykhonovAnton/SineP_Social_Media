import './BottomNavigaton.module.css';
import {Badge, BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AddIcon from '@mui/icons-material/Add';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {useState, useRef} from "react";
import {useNavigate} from "react-router";
import {ADD_ROUTE, CHAT_ROUTE, DISCOVER_ROUTE, HOME_ROUTE, INBOX_ROUTE} from "../../../uutils/consts";

export const MobileNavigationFooter = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleDiscoverNavigate = () => {
        navigate(DISCOVER_ROUTE);
    }

    const handleHomeNavigate = () => {
        navigate(HOME_ROUTE);
    }

    const handleChatNavigate = () => {
        navigate(CHAT_ROUTE);
    }

    const handleInboxNavigate = () => {
        navigate(INBOX_ROUTE);
    }

    const handleAddNavigate = () => {
        navigate(ADD_ROUTE);
    }

    return (
        <Paper sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000
        }}
               elevation={3}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    background: '#121212',
                    height: '3rem'
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon/>}
                                        sx={{
                                            color: '#4d4d4d',
                                            '&.Mui-selected': {
                                                color: 'white'
                                            },
                                            minWidth: '1rem'
                                        }}
                                        onClick={handleHomeNavigate}
                />
                <BottomNavigationAction label="Discover" icon={<ExploreIcon/>}
                                        sx={{
                                            color: '#4d4d4d',
                                            '&.Mui-selected': {
                                                color: 'white'
                                            },
                                            minWidth: '1rem'
                                        }}
                                        onClick={handleDiscoverNavigate}
                />
                <BottomNavigationAction label="Create" icon={<AddIcon/>}
                                        sx={{
                                            color: '#4d4d4d',
                                            '&.Mui-selected': {
                                                color: 'white'
                                            },
                                            minWidth: '1rem'
                                        }}
                                        onClick={handleAddNavigate}
                />
                <BottomNavigationAction label="Chat" icon={<ChatOutlinedIcon/>}
                                        sx={{
                                            color: '#4d4d4d',
                                            '&.Mui-selected': {
                                                color: 'white'
                                            },
                                            minWidth: '1rem'
                                        }}
                                        onClick={handleChatNavigate}
                />
                <BottomNavigationAction label="Inbox" icon={
                    <Badge badgeContent={12} color={'primary'} max={99}
                           sx={{
                               '& .MuiBadge-badge': {
                                   bgcolor: '#F73F08',
                                   color: 'white',
                                   p: '0 0.2rem',
                                   height: '1rem'
                               },
                           }}
                    >
                        <NotificationsOutlinedIcon/>
                    </Badge>
                }
                                        onClick={handleInboxNavigate}
                                        sx={{
                                            color: '#4d4d4d',
                                            '&.Mui-selected': {
                                                color: 'white'
                                            },
                                            minWidth: '1rem'
                                        }}
                />
            </BottomNavigation>
        </Paper>
    );
}
