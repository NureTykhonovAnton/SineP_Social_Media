import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {DrawerList} from "./DrawerList/DrawerList";

export default function MenuDrawer({toggleDrawer, state}) {

    return (
        <div className={'bg-[#121212]'}>
                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            background: '#121212',
                            color: 'white'
                        }
                    }}
                >
                    <DrawerList toggleDrawer={toggleDrawer}/>
                </SwipeableDrawer>
        </div>
    );
}
