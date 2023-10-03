//El titulo lo dice todo

import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
import { redirectToHomeButton } from "../index"









export const RedirectToHomeButton = () =>{

    const nav = useNavigate()

    const hadleRedirectToHome = () =>{
        nav("/")
    }

    return (
        <IconButton onClick={hadleRedirectToHome}>
            <HomeIcon sx={redirectToHomeButton.homeIconStyles}/>
        </IconButton>
    )

}