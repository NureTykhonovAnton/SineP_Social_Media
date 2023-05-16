import {Button} from "@mui/material";
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Avatar from "@mui/material/Avatar";
import {SearchBar} from "../../../../Chat/SearchBar/SearchBar";
import {CommunitiesList} from "./components/CommunitiesList/CommunitiesList";

const communities = [
    {
        img: '',
        name: 's/Obnoxious_Logos'
    },
    {
        img: '',
        name: 's/Obnoxious_Logos'
    },
    {
        img: '',
        name: 's/Obnoxious_Logos'
    },
    {
        img: '',
        name: 's/Obnoxious_Logos'
    },
    {
        img: '',
        name: 's/Obnoxious_Logos'
    },
    {
        img: '',
        name: 's/Obnoxious_Logos'
    },
    {
        img: '',
        name: 's/Obnoxious_Logos'
    },
    {
        img: '',
        name: 's/Obnoxious_Logos'
    },
    {
        img: '',
        name: 's/Obnoxious_Logos'
    },
    {
        img: '',
        name: 's/Obnoxious_Logos'
    },
    {
        img: '',
        name: 's/Obnoxious_Logos'
    },

]

export const AddToCommunityPage = () => {
    return (
        <div className={'flex flex-col w-full h-[65vh] items-center'}>
            <div className={'flex text-white'}>
                <PeopleOutlinedIcon/>
                Add to Community Page
            </div>
            <div>
                <SearchBar extraStyles={'my-5'}/>
            </div>
            <div className={'w-full overflow-auto'}>
                <CommunitiesList communitiesList={communities}/>
            </div>
        </div>
    );
}
