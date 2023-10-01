import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import {  useNavigate } from 'react-router-dom';










export const RedirectToHomeButton = () =>{

    const nav = useNavigate()

    const hadleRedirectToHome = () =>{
        nav("/")
    }

    return (
        <IconButton onClick={hadleRedirectToHome}>
            <HomeIcon sx={{color:"blue",fontSize:40}}/>
        </IconButton>
    )

}