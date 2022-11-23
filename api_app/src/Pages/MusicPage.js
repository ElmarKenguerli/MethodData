import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
//Material UI imports
import {

    Box,
    Button,
    TextField
} from '@mui/material';
export const MusicPage = () => {

    //params to link to spotify authentication page
    const CLIENT_ID = "ebae1cf4c66e43d1bb4be96da272696f"
    const REDIRECT_URI = "http://localhost:3000/MusicPage"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    

    const [token, setToken] = useState("")

    /*  Check for hash or token in local storage
     *  If not, extract token from hash string
     */
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
    
        setToken(token)
    
    }, [])

    /*  Logout & remove token from local storage
     */
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }
    return(
        <Box className="App">
        
            {/* Redirect to Spotify Login to get hash => access token.
              * Only renders LogOut button if there is a token present.
              */}
            <Box className="SpotifyLogin">                        
                {!token ?
                    <Button size="large" variant="contained" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</Button>
                    : <Button size="large" variant="contained" onClick={logout}>Logout</Button>}
                <h1>Spotify Lookup</h1>
            </Box>

            <Box className= "searchBar">
                <TextField fullWidth id="fullWidth" />
            </Box>
        </Box>
    )

}

export default MusicPage;