import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import {  useState } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";
import StoreIcon from '@mui/icons-material/Store';
import { cleanCart,  deleteProduct,  Product } from "../../store/addToCarSlice/addToCarSlice";
import {  useNavigate } from "react-router-dom";
import { TopImageLogo } from "../../components/TopImageLogo/TopImageLogo";
import { ExtraData } from "../../assets/mocks/ExtraData";
import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import { toast, ToastContainer } from 'react-toastify'




export const CartPage = ():JSX.Element=> {

  const cart  = useCustomSelector((state)=>state.cart.products);

  const dispatch = useCustomDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);


const rows:GridRowsProp = cart.map((product:Product)=>
  (
    { id: product.id, 
      photoURL: product.image, 
      name: product.name.split(" ").slice(1,2) , 
      quantity: product.quantity, 
      price: product.price,
      delete:<DeleteIcon/>
    }
  )
);


  
  const columns: GridColDef[] = [
    
    { field: "photoURL", headerName: "Producto",renderCell:params => <Box component="img" src={params.row.photoURL} sx={{width:50}}/>, sortable:false, filterable:false},
    { field: "name", headerName: "Nombre",sortable:false, filterable:false,hideable:false},
    { field: "quantity", headerName: "Cantidad",sortable:false, filterable:false,hideable:false},
    { field: "price", headerName: "Precio",sortable:false, filterable:true,hideable:false},
    { field: "delete", headerName: "Borrar",renderCell:params => 
    <IconButton onClick={()=>deleteProductId(params.row.id)} >{params.row.delete}</IconButton>,sortable:false, filterable:false,hideable:false}
  ];

  

  const totalToPay=()=>{
    const totalToPay = cart.reduce((acc: number, cur: { price: string; quantity: any; }) => acc + (parseInt(cur.price.slice(1)) * (cur.quantity )), 0)
    return totalToPay
  }

  const satisfactoryPurchaseToast = () =>{
    toast.success('La compra se ha realizado correctamente!', {
    position: "bottom-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}  
  
  const handleClick =()=>{
    satisfactoryPurchaseToast()
    dispatch(cleanCart())
    localStorage.clear()
    closeModal()
  }
  
  const refreshStorage = (id: any) =>{

    const localStorageToObject = JSON.parse(localStorage.cart);

    const localStorageIndex = localStorageToObject.findIndex( (x: { id: any; }) => x.id === id )

    const localStorageId = localStorageToObject [localStorageIndex].id;

    const deleteLocalStorage = localStorageToObject?.filter((x: { id: any; }) => x.id !== localStorageId);

    localStorage.setItem("cart",JSON.stringify(deleteLocalStorage.map(((item: any) =>item))))

    
  }

  const deleteProductId =(id:number)=>{
    dispatch(deleteProduct(id))
    refreshStorage(id)
  }

 

  return (
    <Box  sx={{display: 'flex',justifyContent:"center" ,alignItems:"center",flexDirection:"column",marginTop:{xl:10,xs:6}}}>
      <TopImageLogo logo={ExtraData.image}/>
      <StoreIcon sx={{color :"rgba(169, 182, 201, 0.6)",fontSize:80,marginTop:"5%"}}/>
      <Typography sx={{fontSize:40, color :"rgba(169, 182, 201, 0.8)",borderBottom:"4px solid rgba(169, 182, 201, 0.8)",width:{xl:"50%",xs:"80%"},textAlign:"center"}}>Mi Cesta</Typography>
    {" "}
        <Box sx={{ height: 400,width: '80%',display:"flex",justifyContent:"center"}}>
            {
              (cart.length === 0)
                ? <Typography fontSize={40}>La cesta está vacía</Typography> 
                :<DataGrid rows={rows} columns={columns} sx={{border:0 ,display:{xl:"flex",lg:"flex",md:"flex",sm:"flex"},alignItems:{xl:"center",lg:"center",md:"center",sm:"center"}}} hideFooterPagination={true}/>
            }
        </Box>
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
      <ToastContainer
                    position="bottom-right"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />
    </Box>
  )
}


