import {AddToCommunityPage} from "./components/AddToCommunityPage/AddToCommunityPage";
import React from "react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import IconButton from "@mui/material/IconButton";
import {AddToMyPage} from "./components/AddToMyPage/AddToMyPage";

export const ChoosePostPlace = ({setPage}) => {
    const handleBackButton = () => {
        setPage(0);
    };

    return (
        <>
            <div className={'flex w-full items-start pl-4'}>
                <IconButton
                    onClick={handleBackButton}
                    sx={{
                        color: '#F73F08'
                    }}
                >
                    <ArrowBackIosNewOutlinedIcon/>
                </IconButton>
            </div>
            <AddToMyPage/>
            <AddToCommunityPage/>
        </>
    );
}
