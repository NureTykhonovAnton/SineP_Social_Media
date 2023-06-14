import {AddToCommunityPage} from "./components/AddToCommunityPage/AddToCommunityPage";
import React, {useContext} from "react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import IconButton from "@mui/material/IconButton";
import {AddToMyPage} from "./components/AddToMyPage/AddToMyPage";
import {Context} from "../../../index";

export const ChoosePostPlace = ({setPage, data}) => {
    const {post} = useContext(Context);

    const handleBackButton = () => {
        setPage(0);
    };

    const handleAddToMyPage = () => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        })
        post.add(formData);
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
            <AddToMyPage onClick={handleAddToMyPage}/>
            <AddToCommunityPage/>
        </>
    );
}
