import React from "react";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";


export default function YoutubeCards({ youtubeCards }) {

    return (
        <Box justifyContent={'space-around'} flexDirection={'row'} display={'flex'} flexWrap={'wrap'}>

            {youtubeCards.map((card) => (

                <Card sx={{ width: '320px', height: '300px', marginBottom: '30px' }} key={card.videoId}>

                    <img style={{ width: '100%', borderRadius: '10%' }} alt='Thumbnail' src={card.imageUrl}></img>
                    <Stack direction={'column'} display={'flex'}>
                        <Stack sx={{ margin: 1 }} direction={'row'} display={'flex'}>
                            <img style={{ width: '30px', borderRadius: '100%', objectFit: 'cover', marginRight: 10 }} alt="UserImage" src={card.userImage}></img>
                            <Typography>{card.description}</Typography>
                        </Stack>
                        <Stack sx={{ marginLeft: 6 }} display={'flex'}>
                            <Typography color={'GrayText'} variant="subtitle">{card.userId}</Typography>
                            <Typography color={'GrayText'} variant="subtitle">{card.views}K Views . 1 month ago</Typography>
                        </Stack>
                    </Stack>

                </Card>

            ))}

        </Box>
    );
}
