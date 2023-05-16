import {Button} from "@mui/material";

export const HeaderGroup = () => {
    return (
        <div className={'flex flex-row justify-between w-full items-center'}>
            <input type="text" className={'border-0 outline-0 p-4 text-white bg-transparent'} placeholder={'TITLE'}/>
            <Button variant={'outlined'}>
                Next
            </Button>
        </div>
    );
}
