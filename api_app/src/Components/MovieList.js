import React from 'react';
//Material UI imports
import {
	Box,
} from '@mui/material';
import Grid from '@mui/material/Grid';

const MovieList = (props) => {



	return (

		<Box>
			<Grid container spacing={1}>
				<Grid item xs={5}>
					<img src={props.movies.Poster} ></img>
				</Grid>
				<Grid item xs={2} sx={{textAlign: "left"}}>
					<h2>
						Title: <br></br>
						Year: <br></br>
						Genre:<br></br>
						Language: <br></br>
						IMDB Rating: <br></br>
						Metascore:<br></br>				
						Rated: <br></br>
						Plot:<br></br>
					</h2>
				</Grid>
				<Grid item xs={4} sx={{textAlign: "left"}}>
					<h2>
						{props.movies.Title}<br></br>
						{props.movies.Year}<br></br>
						{props.movies.Genre}<br></br>
						{props.movies.Language}<br></br>
						{props.movies.imdbRating}<br></br>
						{props.movies.Metascore}<br></br>
						{props.movies.Rated}<br></br>
						{props.movies.Plot}<br></br>
					</h2>
				</Grid>


			</Grid>
		</Box>
	);
};

export default MovieList;