import React, { useReducer } from "react";
//Material UI imports
import {

    Box,
    Button,
    TextField,
    Link,
    MenuItem 
} from '@mui/material';
import Select from '@mui/material/Select';

const NumSongs = (props) => {

    const handleNumChange = (e) => {
        props.handleChange(e);
    };

    return(
        <h3>Number of Songs to View  &nbsp;&nbsp;&nbsp;&nbsp;
            <Select
                value={props.songNum}
                label="Select number of Tracks to display"
                onChange={(event) => {
                    handleNumChange(event)}}
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
            </Select>
        </h3>
    )
};

export default React.memo(NumSongs);