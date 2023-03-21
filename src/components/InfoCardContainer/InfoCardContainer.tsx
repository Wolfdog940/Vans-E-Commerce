import { Box, Button, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useCustomDispatch } from '../../hooks/redux'
import { addProduct } from '../../store/addToCarSlice/addToCarSlice'

export const InfoCardContainer = ({productObject, setFrontImage, frontImage}:any):JSX.Element => {
    const dispatch = useCustomDispatch()

    const notify = () =>{
        toast.success('Se ha guardado en la cesta correctamente!', {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }   

    const handleClick =()=>{

        dispatch(addProduct({
                id:productObject.productId,
                name:productObject.productName,
                price:productObject.price,
                image:productObject.image[0],
                quantity:productObject.quantity
                }))
                notify()
            }

    return (
    <Box sx={{ display: "flex", flexDirection: { xl: "row", xs: "column" }, justifyContent: { xs: "center" }, alignItems: { xs: "center" } }}>
            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", width: { xl: "50%", xs: "100%" }, alignItems: { xs: "center" } }}>
                <CardMedia component="img" src={productObject.image[frontImage]} sx={{ border: "4px solid rgba(169, 182, 201, 0.2)", marginLeft: { xl: 1 }, borderRadius: 5, width: { xs: "90%" } }} />
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 1, marginBottom: 5 }}>

                    {productObject.image.map((item: any, index: any) => (
                        <img id={index} key={index} onClick={() => setFrontImage(productObject.image.indexOf(item))} src={item} style={{ border: "4px solid rgba(169, 182, 201, 0.2)", marginLeft: 1, borderRadius: 5, width: "10%", height: "100%" }} />
                    ))}

                </Box>
            </Box>

            <Box sx={{ width: { xl: "50%", xs: "90%" }, marginLeft: { xl: 10, xs: 2 }, marginRight: { xs: 1 }, direction: "flex", alignItems: { xs: "center" }, justifyContent: "center" }}>
                <Typography sx={{ fontSize: { xl: 25, xs: 20 }, textAlign: { xs: "center" }, fontWeight: "bold", marginTop: "5%" }}>{productObject.productName}</Typography>
                <Typography sx={{ fontSize: 30, fontWeight: "bold", textAlign: { xs: "center" }, marginBottom: 10, marginTop: { xs: 1 } }}>{productObject.price}</Typography>
                <Typography sx={{ fontSize: 15, fontWeight: "bold", marginLeft: 1, marginTop: "20%" }}>{`Color: ${productObject.color}`}</Typography>
                <CardMedia component="img" src={productObject.image[0]} sx={{ border: "4px solid rgba(169, 182, 201, 0.2)", borderRadius: 5, cursor: "default", width: "15%", marginTop: 2 }} />
                <Typography sx={{ fontSize: 15, fontWeight: "bold", marginTop: "20%" }}>DESCRIPCIÓN Y CARACTERÍSTICAS</Typography>
                <Typography sx={{ marginTop: 2 }}>{productObject.description}</Typography>
                <Typography sx={{ fontSize: 15, fontWeight: "bold", marginTop: "10%" }}>{`Composición: ${productObject.Composición}`}</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: { xl: "5%", xs: "5%" }, marginBottom: { xs: "5%" } }}>
                    <Button sx={{ background: "gray", "&:hover": { transform: "scale(1.2)", background: "gray" } }} variant="contained" onClick={handleClick}>Anadir al carro</Button>
                </Box>
            </Box>
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
