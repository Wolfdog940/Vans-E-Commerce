import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", maxHeight:125,width:"100%", background:"rgba(169, 182, 201, 0.4)"}}>
            <Typography sx={{marginTop:1, fontSize:10, fontWeight:"bold", color:"gray"}}>FOLLOW US</Typography>
            <Box sx={{marginTop:1,marginBottom:1}}>
                <TwitterIcon sx={{fontSize:25, color:"gray"}}/>
                <FacebookIcon sx={{fontSize:25, color:"gray"}}/>
                <InstagramIcon sx={{fontSize:25, color:"gray"}}/>
                <YouTubeIcon sx={{fontSize:25, color:"gray"}}/>
            </Box>
        </Box>
        
    )
}
