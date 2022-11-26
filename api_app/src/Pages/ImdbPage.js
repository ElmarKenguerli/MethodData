import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from '../Components/MovieList';
//Material UI imports
import {
    Box,
    Button,
    TextField,
    Link,
} from '@mui/material';


export const ImdbPage = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState("");

    const [movies, setMovies] = useState([
    {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "1980",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "imdbID": "tt0086190",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }]);

    return (
        <Box className="App">
            <Box className="backBtn">
                <Button size="large" variant="contained" onClick={(e) => navigate("/")}>Back  to Dashboard</Button>
            </Box>
            <h1>IMDB Lookup</h1>

            <Box className="searchBar">
                <TextField placeholder="Search for Song" fullWidth id="fullWidth" onChange={e => setSearch(e.target.value)} />
                <Button size="large" variant="contained" sx={{ padding: "15px", margin: "15px", width: "300px" }} >Search Now</Button>

                
            </Box>

            <Box style={{ marginTop: "20px" }}>
                <MovieList movies={movies} />              
		    </Box>
        </Box>
    )

}

export default ImdbPage;