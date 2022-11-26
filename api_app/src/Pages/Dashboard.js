import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
//Material UI imports
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import TwitterIcon from '@mui/icons-material/Twitter';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export const Dashboard = () => {
    let navigate = useNavigate();
    //declaring list of button components for the dashboard
    const buttons = [
        <Button key="tweets"
            onClick={() => navigate("/TweetsPage")}
            startIcon={<TwitterIcon
                style={{ fontSize: "30px" }} />} >Let's View Tweets
        </Button>,
        <Button key="music"
            onClick={() => navigate("/MusicPage")}
            startIcon={<LibraryMusicIcon
                style={{ fontSize: "30px" }} />}>Let's Look For Music
        </Button>,
        <Button key="movies"
            onClick={() => navigate("/MoviePage")}
            startIcon={<LiveTvIcon
                style={{ fontSize: "30px" }} />}>Let's Find Some Movies
        </Button>,
    ];

    return (
        //Box container for our view
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

            }}
        >

            <ButtonGroup size="large" aria-label="large button group">
                {buttons}
            </ButtonGroup>
        </Box>
    )


}

export default Dashboard;