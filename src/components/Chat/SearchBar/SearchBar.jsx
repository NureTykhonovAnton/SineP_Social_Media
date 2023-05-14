import {OutlinedInput} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({extraStyles}) => {
    return (
        <div className={extraStyles}>
            <OutlinedInput
                endAdornment={
                    <SearchIcon/>
                }
                sx={{
                    textColor: 'white',
                    zIndex: 10000,
                    backdropFilter: 'blur(5px)',
                    height: '2rem'
                }}
            />
        </div>
    );
}
