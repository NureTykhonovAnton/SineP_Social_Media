import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Divider from "@mui/material/Divider";

export const VoteButtonGroup = () => {
    return (
        <ButtonGroup
            sx={{
                display: 'fex',
                justifyContent: 'center',
                outline: '1px solid #ffffff99'
            }}
            variant="outlined"
        >
            <IconButton
            sx={{
                p: 0
            }}
            >
                <ArrowDropUpRoundedIcon
                    sx={{
                        fontSize: '2rem',
                        transition: '0.1s linear',
                        opacity: 0.6,
                        '&:hover': {
                            opacity: 1
                        },
                    }}
                />
            </IconButton>
            <span className={'opacity-50 text-xs'}>Vote</span>
            <IconButton
            sx={{
                p: 0
            }}
            >
                <ArrowDropDownRoundedIcon
                    sx={{
                        fontSize: '2rem',
                        transition: '0.1s linear',
                        opacity: 0.6,
                        '&:hover': {
                            opacity: 1
                        },
                    }}
                />
            </IconButton>
        </ButtonGroup>
    );
}
