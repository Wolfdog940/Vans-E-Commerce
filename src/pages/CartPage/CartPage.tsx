import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { CartContainer } from "../../components/CartContainer/CartContainer";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";
import StoreIcon from '@mui/icons-material/Store';
import { cleanCart } from "../../store/addToCarSlice/addToCarSlice";
import { Link, useNavigate } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';
import { TopImageLogo } from "../../components/TopImageLogo/TopImageLogo";
import { ExtraData } from "../../assets/mocks/ExtraData";

interface Cart {
  id :number,
  name:string,
  price:string,
  image:string
}//No puedo utilizar esto 


export const CartPage = ():JSX.Element=> {

  const cart  = useCustomSelector((state)=>state.cart.products);

  const dispatch = useCustomDispatch()

  const navigate = useNavigate();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const totalToPay=()=>{
    let totalToPay= 0
    cart?.map((carProduct)=>carProduct.price).map((x)=> totalToPay = totalToPay + parseInt(x.slice(1)))
    return totalToPay
  }
  const handleClick =()=>{
    dispatch(cleanCart())
    navigate("/")
  }
  

  return (
    <Box sx={{display: 'flex',justifyContent:"center" ,alignItems:"center",flexDirection:"column",marginTop:{xl:10,xs:2}}}>
      <TopImageLogo logo={ExtraData.image}/>
      <StoreIcon sx={{color :"rgba(169, 182, 201, 0.6)",fontSize:80,marginTop:"5%"}}/>
      <Typography sx={{fontSize:40, color :"rgba(169, 182, 201, 0.8)",borderBottom:"4px solid rgba(169, 182, 201, 0.8)",width:{xl:"35%",xs:"80%"},textAlign:"center"}}>Mi Cesta</Typography>
    {" "}
        <Grid container sx={{display: 'flex',flexDirection:"column",alignContent:"center"}}>
            {
            
              (cart.length === 0)
              ? <Typography fontSize={40}>La cesta está vacía</Typography>
              : cart?.map((cartProduct: any ,index:any ) => (<CartContainer  key={cartProduct.id} cartProduct={cartProduct}/>))
            
            
            }
      </Grid>
        <Box sx={{display: 'flex',justifyContent:"space-between",width:{xl:"35%",xs:"80%"},marginBottom:5}}>
          <Typography sx={{fontSize:25}}>Total: </Typography>
          <Typography sx={{fontSize:25}}>{`${totalToPay()} €`}</Typography>
        </Box>
        {cart.length?<Button variant="contained" sx={{marginBottom:2}} onClick={openModal}>Comprar</Button>:null}
        <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>Está apunto de realizar una compra</DialogTitle>
        <DialogContent>Confirme una acción para continuar</DialogContent>
        <DialogActions sx={{display:"flex",justifyContent:"center",paddingY:5}}>
        <Button color="error" variant="contained" onClick={closeModal}>
            Cancelar
        </Button>
        <Button color="success" variant="contained" onClick={handleClick}>
            Comprar
        </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

