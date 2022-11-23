import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import '../App.css';
//Material UI imports
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

export const Dashboard = () => {
    let navigate = useNavigate();
    //declaring list of button components for the dashboard
    const buttons = [
        <Button key="tweets" onClick={() => navigate("/TweetsPage")}>Let's View Tweets</Button>,
        <Button key="music" onClick={() => navigate("/MusicPage")}>Let's Look For Music</Button>,
        <Button key="movies" onClick={() => navigate("/MoviePage")}>Let's Find Some Movies</Button>,
      ];

    return(
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