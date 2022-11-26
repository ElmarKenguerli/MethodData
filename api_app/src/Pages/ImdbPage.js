import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import MovieList from '../Components/MovieList';
//Material UI imports
import {
    Box,
    Button,
    TextField,
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const ImdbPage = () => {
    let navigate = useNavigate();
    
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const url = `http://www.omdbapi.com/?s=${search}&apikey=3e7be19e`;
        await axios.get(url)
        .then(res => res.data.Search)
        .then(res => {
            
            if (res) {
                setMovies(res);
                console.log(res);
            }else{
                setMovies([]);
                console.log("Movie Not Found");
            }})
        .catch((err) => {
            console.log(err);
        });
    
    }
   
    return (
        <Box className="App">
            <Box className="backBtn">
                <Button size="large" variant="contained" onClick={(e) => navigate("/")}>Back  to Dashboard</Button>
            </Box>
            <h1>IMDB Lookup</h1>

            <Box className="searchBar">
                <TextField placeholder="Search for Song" fullWidth id="fullWidth" onChange={e => setSearch(e.target.value)} />
                <Button size="large" variant="contained" onClick={getMovies} sx={{ padding: "15px", margin: "15px", width: "300px" }} >Search Now</Button>
                

            </Box>

            <Box style={{ marginTop: "20px" }}>
                <MovieList movies={movies} />
                
            </Box>
        </Box>
    )

    
}

export default ImdbPage;