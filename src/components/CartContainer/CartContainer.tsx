import { Box, CardContent, IconButton } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/redux';
import addProduct from '../../store/addToCarSlice/addToCarSlice';

type CartProps ={
    cartProduct: {
    id? :number,
    name:string,
    price:string,
    image:string,
    quantity:string
    }
}

export const CartContainer = ({cartProduct}:CartProps):JSX.Element => {

    const cart  = useCustomSelector((state)=>state.cart.products);
    const dispatch = useCustomDispatch()

    const { id , name , price , image, quantity } = cartProduct;
    const total = parseInt(price.slice(1))
    const [ newQuantity ,setNewQuantity ] = useState()
    

  return (
    <Box sx={{display:"flex",width:{xl:"45%",xs:"80%"},marginBottom:1,flexDirection:"row",borderBottom:"4px solid rgba(169, 182, 201, 0.2)"}}>     
      <img  src={image} style={{width:"25%",height:"100%"}}/>
      <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"}}>
        <Typography sx={{fontSize:20,fontWeight:"bold",marginX:2 ,display:"flex",marginLeft:1,color:"grey"}}>{name}</Typography>
        <IconButton>{`<`}</IconButton>
        <Typography>{quantity}</Typography>
        <IconButton>{`>`}</IconButton>
        <Typography sx={{fontSize:16,fontWeight:"bold",display:"flex",width:"75%",justifyContent:"flex-end"}}>{price}</Typography>
      </Box>
    </Box>
  )
}
