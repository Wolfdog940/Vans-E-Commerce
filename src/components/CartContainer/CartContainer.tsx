import { Box, CardContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useCustomSelector } from '../../hooks/redux';

type CartProps ={
    cartProduct: {
    id? :number,
    name:string,
    price:string,
    image:string
    }
}

export const CartContainer = ({cartProduct}:CartProps):JSX.Element => {

    const cart  = useCustomSelector((state)=>state);

    const { id , name , price , image } = cartProduct

    const total = parseInt(price.slice(1))
    

  return (
    <Box sx={{display:"flex",width:{xl:"35%",xs:"80%"},marginBottom:1,flexDirection:"row",borderBottom:"4px solid rgba(169, 182, 201, 0.2)"}}>
        <img  src={image} style={{width:"30%",height:"100%"}}/>
        <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"}}>
            <Typography sx={{fontSize:12,fontWeight:"bold",marginX:2 ,display:"flex",marginLeft:1,color:"grey"}}>{name}</Typography>
            <Typography sx={{fontSize:15,fontWeight:"bold",display:"flex",width:"75%",justifyContent:"flex-end"}}>{price}</Typography>
        </Box>
    </Box>
  )
}
