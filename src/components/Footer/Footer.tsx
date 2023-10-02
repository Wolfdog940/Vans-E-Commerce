import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { styles } from "./styles";

export const Footer = () => {
    return (
        <Box sx={styles.footerContainer}>
            <Typography sx={styles.topographyStyle}>FOLLOW US</Typography>
            <Box sx={styles.iconsContainer}>
                <TwitterIcon sx={styles.iconStyle}/>
                <FacebookIcon sx={styles.iconStyle}/>
                <InstagramIcon sx={styles.iconStyle}/>
                <YouTubeIcon sx={styles.iconStyle}/>
            </Box>
        </Box>
        
    )
}
