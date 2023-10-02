import { Box, Typography } from "@mui/material"
import { footerStyles } from "../index";
import { Instagram, Facebook, Twitter, YouTube } from "@mui/icons-material"

export const Footer = () => {
    return (
        <Box sx={footerStyles.footerContainer}>
            <Typography sx={footerStyles.topographyStyle}>FOLLOW US</Typography>
            <Box sx={footerStyles.iconsContainer}>
                <Twitter sx={footerStyles.iconStyle}/>
                <Facebook sx={footerStyles.iconStyle}/>
                <Instagram sx={footerStyles.iconStyle}/>
                <YouTube sx={footerStyles.iconStyle}/>
            </Box>
        </Box>
        
    )
}
