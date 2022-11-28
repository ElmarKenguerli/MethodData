import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
//Material UI imports
import {
    Box,
    Button,
    TextField,
} from '@mui/material';

export const TweetsPage = () => {
    let navigate = useNavigate();
    
    const [search, setSearch] = useState("");
    const [tweets, setTweets] = useState([]);

  

    const getTweets = () => {
        
    }

    return(
        <Box className="App">
        <Box className="backBtn">
            <Button size="large" variant="contained" onClick={(e) => navigate("/")}>Back  to Dashboard</Button>
        </Box>
        <h1>Twitter Lookup</h1>

        <Box className="searchBar">
            <TextField placeholder="Search for Tweets" fullWidth id="fullWidth" onChange={e => setSearch(e.target.value)} />
            <Button size="large" variant="contained" onClick={getTweets} sx={{ padding: "15px", margin: "15px", width: "300px" }} >Search Now</Button>
        </Box>

        {/* Conditionally Render Tweets */}
        <Box style={{ marginTop: "20px" }}>
            
        </Box>
    </Box>
    )

}

export default TweetsPage;