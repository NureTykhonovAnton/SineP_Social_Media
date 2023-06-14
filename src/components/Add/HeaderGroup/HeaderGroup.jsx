// import {Button} from "@mui/material";
import React from "react";
import {Button} from "../../Button/Button";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import IconButton from "@mui/material/IconButton";

export const HeaderGroup = ({setPage, setData, value}) => {
    const handleNextButton = () => {
        setPage(1);
    };

    return (
        <div className={'flex flex-row justify-between w-full items-center'}>
            <input type="text"
                   className={'border-0 outline-0 p-4 text-white bg-transparent'}
                   placeholder={'TITLE'}
                   onChange={e => setData(e, 'title')}
                   value={value}
            />
            <IconButton sx={{
                color: '#F73F08'
            }}
                        onClick={handleNextButton}
            >
                <ArrowForwardIosOutlinedIcon/>
            </IconButton>
        </div>
    );
}
