//Nav con iconos de filtro y redireccion a HomePage

import CardMedia from "@mui/material/CardMedia/CardMedia"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { AppBar, Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useCustomSelector } from "../../hooks/redux";
import { Filter, RedirectToHomeButton } from "../index"
import { useLocation } from 'react-router-dom'
import { topImageLogoStyles } from "../index";

interface Image{
    logo:string
}


export const TopImageLogo = ({logo}:Image):JSX.Element => {

    const cart  = useCustomSelector((state)=>state?.cart.products);

    const location = useLocation();

    const totalItems=()=>{
        const totalToPay = cart.reduce((acc: any, cur: { quantity: any; }) => acc + cur.quantity, 0)
        return totalToPay
      }
      

    return (

        <AppBar sx={topImageLogoStyles.appBarStyles}>
            <Box sx={topImageLogoStyles.topContainer}>
                <Box>
                    <Link to="/">
                        <CardMedia component="img" image={logo} sx={topImageLogoStyles.cardMedia}/>
                    </Link>
                </Box>
                {(location.pathname == "/")?
                <Box>
                    <Filter/>
                </Box>:
                <Box>
                    <RedirectToHomeButton/>
                </Box>}
                
                <Box>
                    <IconButton sx={topImageLogoStyles.iconButtonStyle} >
                        <Badge badgeContent={totalItems()} color="error">
                            <Box>
                                <Link to="/cart">
                                    <ShoppingCartIcon sx={topImageLogoStyles.shoppingCartIcon}/>
                                </Link>
                            </Box>
                        </Badge>
                </IconButton>
                </Box>
            </Box>
        </AppBar>
    )
}
