import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";
import StoreIcon from '@mui/icons-material/Store';
import { cleanCart, Product } from "../../store/addToCarSlice/addToCarSlice";
import { Link, useNavigate } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';
import { TopImageLogo } from "../../components/TopImageLogo/TopImageLogo";
import { ExtraData } from "../../assets/mocks/ExtraData";
import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";



export const CartPage = ():JSX.Element=> {

  const cart  = useCustomSelector((state)=>state.cart.products);

  const dispatch = useCustomDispatch()

  const navigate = useNavigate();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);


const rows:GridRowsProp = cart.map((product:Product)=>
  (
    { id: product.id, 
      photoURL: product.image, 
      name: product.name.split(" ").slice(1,2) , 
      quantity: product.quantity, 
      price: product.price 
    }
  )
);
  
  const columns: GridColDef[] = [
    
    { field: "photoURL", headerName: "Producto",flex:1 ,align:"center",headerAlign:"center",renderCell:params =><Box component="img" src={params.row.photoURL} sx={{width:50}}/>, sortable:false, filterable:false},
    { field: "name", headerName: "Nombre", flex:1,align:"center",headerAlign:"center"},
    { field: "quantity", headerName: "Cantidad", flex:1,align:"center",headerAlign:"center"},
    { field: "price", headerName: "Precio",flex:1,align:"center",headerAlign:"center"},
  ];



  const totalToPay=()=>{
    const totalToPay = cart.reduce((acc, cur) => acc + (parseInt(cur.price.slice(1)) * (cur.quantity )), 0)
    return totalToPay
  }
  const handleClick =()=>{
    dispatch(cleanCart())
    navigate("/")
  }
  

  return (
    <Box  sx={{display: 'flex',justifyContent:"center" ,alignItems:"center",flexDirection:"column",marginTop:{xl:10,xs:2}}}>
      <TopImageLogo logo={ExtraData.image}/>
      <StoreIcon sx={{color :"rgba(169, 182, 201, 0.6)",fontSize:80,marginTop:"5%"}}/>
      <Typography sx={{fontSize:40, color :"rgba(169, 182, 201, 0.8)",borderBottom:"4px solid rgba(169, 182, 201, 0.8)",width:{xl:"50%",xs:"80%"},textAlign:"center"}}>Mi Cesta</Typography>
    {" "}
        <Grid item sx={{ height: 400,display:"flex",justifyContent:"center",marginTop:"2%",width:{xl:"50%",xs:"80%"}}}>
            {
              (cart.length === 0)
                ? <Typography fontSize={40}>La cesta está vacía</Typography> 
                :<DataGrid rows={rows} columns={columns} sx={{width:"90%",border:0}} hideFooterPagination={true}/>
            }
        </Grid>
        <Box sx={{display: 'flex',justifyContent:"space-between",width:{xl:"35%",xs:"80%"},marginBottom:5}}>
          <Typography sx={{fontSize:25}}>Total: </Typography>
          <Typography sx={{fontSize:25,fontFamily:"bold"}}>{`${totalToPay()} €`}</Typography>
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

