import CardMedia from "@mui/material/CardMedia/CardMedia"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { AppBar, Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useCustomSelector } from "../../hooks/redux";
import { Filter } from "../filter/Filter";
import { useLocation } from 'react-router-dom'
import { RedirectToHomeButton } from "../redirectToHomeBotton/RedirectToHomeButton";

interface Image{
    logo:string
}


export const TopImageLogo = ({logo}:Image):JSX.Element => {

    const cart  = useCustomSelector((state)=>state.cart.products);

    const location = useLocation();

    const totalItems=()=>{
        const totalToPay = cart.reduce((acc: any, cur: { quantity: any; }) => acc + cur.quantity, 0)
        return totalToPay
      }
      

    return (

        <AppBar sx={{background:"rgb(255,255,255,0.9)",boxShadow:"none" }}>
            <Box sx={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
                <Box>
                    <Link to="/">
                        <CardMedia component="img" image={logo} sx={{maxWidth:{xl:"10%",lg:"10%",sm:"10%",xs:"25%"},paddingY:{xl:2,lg:2,sm:1,xs:1},paddingX:{xl:8,xs:2,lg:6,sm:4}}}/>
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
                    <IconButton sx={{width:70, height:70, marginRight:{xl:5,xs:1}}} >
                        <Badge badgeContent={totalItems()} color="error">
                            <Box>
                                <Link to="/cart">
                                    <ShoppingCartIcon sx={{fontSize:40,color:"blue"}}/>
                                </Link>
                            </Box>
                        </Badge>
                </IconButton>
                </Box>
            </Box>
        </AppBar>
    )
}
