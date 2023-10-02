import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import {  useState } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";
import StoreIcon from '@mui/icons-material/Store';
import { cleanCart,  deleteProduct,  Product } from "../../store/addToCarSlice/addToCarSlice";
import { TopImageLogo } from "../../components/TopImageLogo/topImageLogo";
import { ExtraData } from "../../assets/mocks/ExtraData";
import { GridRowsProp, GridColDef, DataGrid } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import { toast, ToastContainer } from 'react-toastify'
import { styles } from "./styles";




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
    
    { field: "photoURL", headerName: "Producto",renderCell:params => <Box component="img" src={params.row.photoURL} sx={styles.columsPhotoUrl}/>, sortable:false, filterable:false},
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

 const productDisposedCorrectlyToast = () =>{
  toast.success('El producto ha sido eliminado de la cesta', {
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

  
  const handleShopingAndCart =()=>{
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
    productDisposedCorrectlyToast()
  }

 

  return (
    <Box  sx={styles.cardPageContainer}>
      <TopImageLogo logo={ExtraData.image}/>
      <StoreIcon sx={styles.storeIconStyles}/>
      <Typography sx={styles.myCardTypography}>Mi Cesta</Typography>
    {" "}
        <Box sx={styles.dataGridContainer}>
            {
              (cart.length === 0)
                ? <Typography sx={styles.emptyDataGridText}>La cesta está vacía</Typography> 
                :<DataGrid rows={rows} columns={columns} sx={styles.dataGridStyles} hideFooterPagination={true}/>
            }
        </Box>
        <Box sx={styles.totalToPayBox}>
          <Typography sx={styles.totalToPayTextStyle}>Total: </Typography>
          <Typography sx={styles.totalToPayAmount}>{`${totalToPay()} €`}</Typography>
        </Box>
        {cart.length?<Button variant="contained" sx={styles.openModalButton} onClick={openModal}>Comprar</Button>:null}
        <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>Está apunto de realizar una compra</DialogTitle>
        <DialogContent>Confirme una acción para continuar</DialogContent>
        <DialogActions sx={styles.DialogActionsStyle}>
        <Button color="error" variant="contained" onClick={closeModal}>
            Cancelar
        </Button>
        <Button color="success" variant="contained" onClick={handleShopingAndCart}>
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


