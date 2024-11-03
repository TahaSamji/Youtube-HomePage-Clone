import React from "react";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import YoutubeCards from "./YoutubeCards";
import thumbnail4 from '../assets/thumbnail4.png'

export default function Feed() {

  const youtubeCards = [
    {
      imageUrl: "thumbnail4.png",
      duration: "5:32",
      description: "Exploring the beauty of nature",
      videoId: "abc123xyz",
      userId: "user123",
      userImage: "simon.png",
      views: 10234
    },
    {
      imageUrl: "thumbnail5.png",
      duration: "8:17",
      description: "Cooking delicious pasta from scratch",
      videoId: "def456uvw",
      userId: "user456",
      userImage: "simon.png",
      views: 8765
    },
    {
      imageUrl: "thumbnail2.png",
      duration: "12:45",
      description: "Learning JavaScript in 30 minutes",
      videoId: "ghi789rst",
      userId: "user789",
      userImage: "simon.png",
      views: 23456
    },
    {
      imageUrl: "thumbnail3.png",
      userImage: "simon.png",
      duration: "3:50",
      description: "Funny cat videos compilation",
      videoId: "jkl012mno",
      userId: "user012",
      views: 6543
    },
    {
      imageUrl: "thumbnail6.png",
      duration: "6:28",
      description: "Virtual tour of Paris city",
      videoId: "pqr345stu",
      userId: "user345",
      userImage: "simon.png",
      views: 34567
    },
    {
      imageUrl: "thumbnail7.png",
      duration: "9:12",
      description: "DIY home decoration ideas",
      videoId: "vwx678yza",
      userId: "user678",
      userImage: "simon.png",
      views: 9876
    },
    {
      imageUrl: "thumbnail8.png",
      duration: "4:15",
      description: "Fitness workout for beginners",
      videoId: "bcd901ghi",
      userImage: "simon.png",
      userId: "user901",
      views: 5432
    },
    {
      imageUrl: "thumbnail5.png",
      duration: "7:03",
      description: "Review of the latest smartphones",
      videoId: "jkl234mno",
      userImage: "simon.png",
      userId: "user234",
      views: 87654
    },
    {
      imageUrl: "thumbnail4.png",
      duration: "10:20",
      description: "Travel vlog: Exploring Tokyo",
      videoId: "pqr567stu",
      userId: "user567",
      userImage: "simon.png",
      views: 23456
    },
    {
      imageUrl: "thumbnail2.png",
      duration: "2:55",
      description: "Gaming tips and tricks",
      videoId: "vwx789yza",
      userId: "user789",
      userImage: "simon.png",
      views: 7654
    },
    {
      imageUrl: "thumbnail4.png",
      duration: "2:55",
      description: "Gaming tips and tricks",
      videoId: "vwx789yza",
      userId: "user789",
      userImage: "simon.png",
      views: 7654
    },
    {
      imageUrl: "thumbnail6.png",
      duration: "2:55",
      description: "Gaming tips and tricks",
      videoId: "vwx789yza",
      userId: "user789",
      userImage: "simon.png",
      views: 7654
    }
  ];
  const categories = ["All", "JavaScript", "Cars", "Anime", "Live", "Music", "Practice", "Computer Science", "Travel","Tent"];

  return (
    <Box p={3.5} flex={6}>
      <Stack direction={'column'}>
        {/* <Card sx={{ display: 'flex', backgroundColor: 'gainsboro', borderRadius: '10%', justifyContent: 'space-evenlyd', marginBottom: '20px', marginLeft: '19px' }}>{categories.map((category) => (
          <Button ><Typography color={'black'} >{category}</Typography></Button>
        ))}</Card> */}
        <Box marginBottom={3} marginLeft={2}>
        {categories.map((category) => (
          <Button sx={{marginRight:'20px',backgroundColor: 'gainsboro',borderRadius: '10%'}}><Typography color={'black'} >{category}</Typography></Button>
        ))}
        </Box>
       
          
        <YoutubeCards youtubeCards={youtubeCards} />
        
      </Stack>
    </Box>
  );

}