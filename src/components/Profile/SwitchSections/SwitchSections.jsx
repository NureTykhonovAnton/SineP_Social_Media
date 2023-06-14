import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useState} from "react";

export const SwitchSections = ({tabs, value, setValue}) => {

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    return (
        <Tabs value={value} onChange={handleChange}
              sx={{
                  '& .MuiTabs-flexContainer': {
                      width: '100%',
                      justifyContent: 'space-between'
                  },
                  '& .MuiTab-root.Mui-selected': {
                      color: 'white'
                  },
                  '& .MuiTabs-indicator': {
                      display: 'none'
                  }
              }}>
            {
                tabs.map(({label, value}) => {
                    return <Tab label={label} value={value} key={value}/>
                })
            }
        </Tabs>
    );
}
