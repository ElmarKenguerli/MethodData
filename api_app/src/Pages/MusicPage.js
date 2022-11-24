import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

//Material UI imports
import {

    Box,
    Button,
    TextField,
    Link
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

    const [search, setSearch] = useState("")
    const [tracks, setTracks] = useState([])
    const [albumName, setAlbum] = useState([])
    /*  Request SPotify API endpoint 
     *  Set object to artist variable
     */
    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: search,
                type: "track"
            }
        })
    
        setTracks(data.tracks.items)
       
        console.log(tracks)
    }

    /*  Display the artists details using map function
     */
    const renderDetails = () => {
        return tracks.slice(0, 5).map(track => (
            <div key={track.id}>

                            
                <img width={"20%"} src={track.album.images[0].url} alt=""/>
                 

                <h2>Song Name: {track.name}</h2>

                <h2>{track.artists.map(artist => (
                    <div key={artist.id}>               
                        Artist(s): {artist.name}
                    </div>
                ))}</h2>

                <h2>Album Name: {track.album.name}</h2>
                <h2>Preview Link: <Link href={track.preview_url}>Click Here To Play</Link></h2>
                <br></br><br></br>
            </div>
        ))
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
                <TextField placeholder="Search for Song" fullWidth id="fullWidth" onChange={e => setSearch(e.target.value)} />
                <Button size="large" variant="contained" style ={{padding: "15px", margin: "15px", width : "300px"}} onClick={searchArtists}>Search Now</Button>
            </Box>

            <Box>
                {renderDetails()}
                
               
            </Box>
        </Box>
    )

}

export default MusicPage;