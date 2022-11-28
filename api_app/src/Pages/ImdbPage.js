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

export const ImdbPage = () => {
    let navigate = useNavigate();
    
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState({});
    const [render, setRender] = useState(false);

    const getMovies = async () => {
        const url = `http://www.omdbapi.com/?t=${search}&apikey=3e7be19e`;
        await axios.get(url, {
            
            params: {
                type: "movie"
            }
        })
        .then(res => res.data)
        .then(res => {
            
            if (res.Title) {
                setRender(true);
                setMovies(res);
                console.log(res);
            }else{
                setRender(false);
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
                <TextField placeholder="Search for Movie" fullWidth id="fullWidth" onChange={e => setSearch(e.target.value)} />
                <Button size="large" variant="contained" onClick={getMovies} sx={{ padding: "15px", margin: "15px", width: "300px" }} >Search Now</Button>
                

            </Box>

            {/* Conditionally Render Movies */}
            <Box style={{ marginTop: "20px" }}>
                {render?
                    <MovieList movies={movies} />
                    : <></>}
                
                
            </Box>
        </Box>
    )

    
}

export default ImdbPage;