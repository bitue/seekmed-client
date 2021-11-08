import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

const Service = (props) => {
     const {name,des,img} = props.service
    return (
        <Card sx={{ maxWidth: 445 ,  boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{width:'auto', margin:'0 auto'}}
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography  gutterBottom variant="h5" component="div">
                   {name}
                </Typography>
                <Typography sx={{color: 'info.secondary'}} variant="body2" color="text.secondary">
                    {des}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Service;