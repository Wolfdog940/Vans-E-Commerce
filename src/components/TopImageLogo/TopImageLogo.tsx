import CardMedia from "@mui/material/CardMedia/CardMedia"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useCustomSelector } from "../../hooks/redux";

interface Image{
    logo:string
}


export const TopImageLogo = ({logo}:Image):JSX.Element => {

    const cartLength:number  = useCustomSelector((state)=>state.cart.products.length);


    return (
        
        
        <Box sx={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
            <Link to="/">
                <CardMedia component="img" image={logo} sx={{maxWidth:{xl:"10%",lg:"10%",sm:"10%",xs:"25%"},paddingY:{xl:2,lg:2,sm:1,xs:1},paddingX:{xl:8,xs:2,lg:6,sm:4}}}/>
            </Link>
            <IconButton sx={{width:70, height:70, marginRight:{xl:5,xs:2}}} >
                <Badge badgeContent={cartLength} color="error">
                    <Link to="/cart">
                        <ShoppingCartIcon sx={{fontSize:40}}/>
                    </Link>
                </Badge>
            </IconButton>
        </Box>
    )
}
