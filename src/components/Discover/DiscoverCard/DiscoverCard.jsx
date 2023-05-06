import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

export default function DiscoverCard({name, subs, img}) {
    return (
        <Card sx={{ maxWidth: 150, maxHeight: 200, mt: '0.2rem' }}>
            <CardActionArea>
                <CardContent sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                    height: '1rem',
                    p: '0.7rem 0.5rem'
                }}>
                    <div>
                        {name}
                    </div>
                    <div className={'flex justify-end items-center w-1/2'}>
                        <PermIdentityOutlinedIcon sx={{
                            fontSize: '1rem'
                        }}/>
                        {subs}
                    </div>
                </CardContent>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
            </CardActionArea>
        </Card>
    );
}
