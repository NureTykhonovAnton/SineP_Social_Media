import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import {Fade, Slide, TextField} from "@mui/material";
import {useRef, useState} from "react";
import AccountButton from "../AccountButton/AccountButton";




export const AuthButtonGroup = ({handleSearchClick, avatar}) => {
    const [search, setSearch] = useState('')

    const [checked, setChecked] = useState(false);
    const containerRef = useRef(null);

    const handleChange = () => {
        setChecked((prev) => !prev);
        setSearch('');
    };

    const handleSearchChange = (event) => {
        const {value} = event.target;
        setSearch(value);
    }

    return (
        <div className={'flex flex-row items-center'}>
            <div className={'flex justify-end items-center'}>
                <Fade in={checked}>
                    <TextField
                        variant={'standard'}
                        placeholder={'Search'}
                        value={search}
                        onChange={handleSearchChange}
                        sx={{
                            width: '60%',
                            '& .MuiInputBase-root': {
                                color: 'white'
                            },
                            '& .MuiTextField-root, .MuiInputBase-root': {
                                height: '1.5rem'
                            },
                            '.css-pis9hk-MuiInputBase-root-MuiInput-root:after': {
                                borderColor: 'white',
                            },
                        }}
                    />
                </Fade>
                <IconButton
                    className={'mx-2'}
                    onClick={handleChange}
                    ref={containerRef}
                >
                    <SearchIcon
                        sx={{
                            color: 'white',
                            fontSize: '1.7rem'
                        }}
                    />
                </IconButton>
            </div>

            <AccountButton src={avatar}/>
        </div>
    );
}
