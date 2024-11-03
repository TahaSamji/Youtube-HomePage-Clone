import React from 'react';
import { AppBar, Box, TextField, Toolbar, Typography, InputAdornment, Stack, Button } from '@mui/material';
import menuImage from '../assets/menu.png';
import logoImage from '../assets/logo.png';
import SearchImage from '../assets/search.png'
import voiceImage from '../assets/voice-search.png'
import UploadImage from '../assets/upload.png'
import UserImage from '../assets/user_profile.jpg'
import NotificationImage from '../assets/notification.png'

export default function NavBar() {

  return (
    <AppBar position='static' sx={{ backgroundColor: 'white', justifyContent: 'center' }}>
      <Toolbar  >
        <Stack direction={'row'} spacing={30} alignItems={'center'} >
          <Stack direction={'row'} spacing={2} alignItems={'center'} >

            <Button ><img src={menuImage} alt="Menu" /></Button>
            
              <img src={logoImage} alt="Logo" />
              <Typography variant='h5' component={'div'} sx={{ color: 'black' }}>Youtube</Typography>
            
          </Stack>
          <Stack direction={'row'} spacing={16} alignItems={'center'}>
            <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
              <TextField sx={{ borderRadius: '50px', width: 400, "& .MuiInputBase-root": { borderRadius: 45, height: 45 } }} label='Search' />
              <Button><img src={SearchImage} alt="Logo" /></Button>
              <Button sx={{ borderRadius: '50px', borderColor: 'black' }} > <img src={voiceImage} alt="voice" style={{ height: '30px' }} /></Button>
            </Stack>
            <Stack alignItems={'center'} direction={'row'} >

              <Button><img src={UploadImage} alt="upload" style={{ height: '30px' }} /></Button>
              <Button><img src={NotificationImage} alt="notification" style={{ height: '30px' }} /></Button>
              <Button><img src={UserImage} alt="user" style={{ height: '30px', borderRadius: '50px' }} /></Button>

            </Stack>
          </Stack>
        </Stack>
      </Toolbar>

    </AppBar>
  );
}
