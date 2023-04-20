import IconButton from "@mui/material/IconButton";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import avatar from "../../../images/avatar.png";
import {useState} from "react";
import {AuthButtonGroup} from "./components/AuthButtonGroup/AuthButtonGroup";

export const Header = () => {
    const [state, setState] = useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <header className={'flex flex-row justify-between fixed ' +
            'bg-[#121212] w-full text-white h-[2.5rem] items-center ' +
            'px-2 z-50'
        }>
            <div>
                <IconButton
                    onClick={toggleDrawer('left', true)}
                >
                    <LinearScaleIcon
                        sx={{
                            color: 'white'
                        }}
                    />
                </IconButton>
            </div>
            <MenuDrawer toggleDrawer={toggleDrawer} state={state}/>
            <AuthButtonGroup avatar={avatar} handleSearchClick={() => {}}/>
        </header>
    );
}
