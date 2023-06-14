import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import {CREATE_COMMUNITY_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE} from "../../../../../uutils/consts";
import {useNavigate} from "react-router";
import {Context} from "../../../../../index";
import {useContext} from "react";

export default function AccountButton({src}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const open = Boolean(anchorEl);
    const navigationObj = {
        createCommunity: CREATE_COMMUNITY_ROUTE,
        profile: PROFILE_ROUTE
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (route) => {
        navigate(route);
    }

    const handleLogoutClick = () => {
        user.setAuth(false);
        localStorage.removeItem('token');
        handleNavigate(LOGIN_ROUTE);
    };



    return (
        <React.Fragment>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ml: 0.5}}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar
                        sx={{width: 30, height: 30}}
                        src={src}
                    />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                sx={{
                    '& .MuiPopover-paper': {
                        bgcolor: '#121212',
                        color: 'white'
                    },
                }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: '#121212',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem onClick={() => handleNavigate(navigationObj.profile)}>
                    <ListItemIcon sx={{
                        color: 'white'
                    }}>
                        <AccountButton/>
                    </ListItemIcon>
                    My Account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon sx={{
                    }}>
                        <div className={'inline-block rounded-[50%] bg-green-500 w-5 h-5'}></div>
                    </ListItemIcon>
                     Online
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon sx={{
                        color: 'white'
                    }}>
                        <SettingsOutlinedIcon/>
                    </ListItemIcon>
                     Settings
                </MenuItem>
                <MenuItem onClick={() => handleNavigate(navigationObj.createCommunity)}>
                    <ListItemIcon sx={{
                        color: 'white'
                    }}>
                        <GroupAddOutlinedIcon/>
                    </ListItemIcon>
                    Create new community
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon sx={{
                        color: 'white'
                    }}>
                        <ExploreOutlinedIcon/>
                    </ListItemIcon>
                    Proxy chat
                </MenuItem>
                <Divider
                    sx={{
                        background: '#1a1a1b'
                    }}
                    variant={'middle'}
                />
                <MenuItem onClick={handleLogoutClick}>
                    <ListItemIcon sx={{
                        color: 'white'
                    }}>
                        <Logout/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
