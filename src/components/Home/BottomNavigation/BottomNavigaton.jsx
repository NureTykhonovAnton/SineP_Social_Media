import './BottomNavigaton.module.css';
import {Badge, BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AddIcon from '@mui/icons-material/Add';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {useState, useRef} from "react";

export const MobileNavigationFooter = () => {
    const [value, setValue] = useState(0);

    return (
        <Paper sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
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
                />
                <BottomNavigationAction label="Discover" icon={<ExploreIcon/>}
                                        sx={{
                                            color: '#4d4d4d',
                                            '&.Mui-selected': {
                                                color: 'white'
                                            },
                                            minWidth: '1rem'
                                        }}
                />
                <BottomNavigationAction label="Create" icon={<AddIcon/>}
                                        sx={{
                                            color: '#4d4d4d',
                                            '&.Mui-selected': {
                                                color: 'white'
                                            },
                                            minWidth: '1rem'
                                        }}
                />
                <BottomNavigationAction label="Chat" icon={<ChatOutlinedIcon/>}
                                       sx={{
                                            color: '#4d4d4d',
                                            '&.Mui-selected': {
                                                color: 'white'
                                            },
                                            minWidth: '1rem'
                                        }}
                />
                <BottomNavigationAction label="Inbox" icon={
                    <Badge badgeContent={4} color={'primary'} max={99}
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
