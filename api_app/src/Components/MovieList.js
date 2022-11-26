import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

const MovieList = (props) => {
	return (
		<Grid container spacing={1}>
			{props.movies.map((movie, index) => (
				<Grid xs={3}>
                    <img src={movie.Poster} alt='movie'></img>  
                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>
                </Grid>
			))}
		</Grid>
	);
};

export default MovieList;