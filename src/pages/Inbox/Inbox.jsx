import {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {InboxList} from "../../components/Inbox/InboxList/InboxList";
import {MessagesList} from "../../components/Inbox/MessagesList/MessagesList";

export const Inbox = () => {
    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className={'pt-12 flex items-center flex-col bg-black flex-wrap w-full'}>
            <section className={'w-full sticky top-10 backdrop-blur-[5px] z-50'}>
                <Tabs value={value} onChange={handleChange}
                      sx={{
                          '& .MuiTab-root': {
                              width: '50%'
                          },
                          '& .MuiTab-root.Mui-selected': {
                              color: 'white'
                          },
                          '& .MuiTabs-indicator': {
                              background: 'transparent'
                          }
                      }}
                >
                    <Tab label="Inbox" value={1}/>
                    <Tab label="Messages" value={2}/>
                </Tabs>
            </section>
            <section className={'pb-14 px-3 flex items-left flex-col justify-around ' +
                'flex-wrap w-full text-white bg-[#121212] rounded-lg'}>
                {
                    value === 1 ? <InboxList/> : <MessagesList/>
                }
            </section>
        </section>

    );
}

