//Contenedor de la cards de informacion detallada del producto 
//Permite cambiar de foto y añadir al carro

import { Box, Button, CardMedia, Typography } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify'
import { useCustomDispatch } from '../../hooks/redux'
import { addProduct } from '../../store/addToCarSlice/addToCarSlice'
import { infoCardContainerStyles } from '../index'

export const InfoCardContainer = ({productObject, setFrontImage, frontImage}:any):JSX.Element => {
    
    const dispatch = useCustomDispatch()

    const AddedToCartToast = () =>{
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
    

    const handleProductsToCart =()=>{

        dispatch(addProduct({
                id:productObject.productId,
                name:productObject.productName,
                price:productObject.price,
                image:productObject.image[0],
                quantity:productObject.quantity
                }))
                AddedToCartToast()
            }

    return (
    <Box sx={infoCardContainerStyles.infoCardContainer}>
            <Box sx={infoCardContainerStyles.cardMediaContainer}>
                <CardMedia component="img" src={productObject.image[frontImage]} sx={infoCardContainerStyles.cardMedia}/>
                <Box sx={infoCardContainerStyles.frontImageBox}>

                    {productObject.image.map((item: any, index: any) => (
                        <img id={index} key={index} onClick={() => setFrontImage(productObject.image.indexOf(item))} src={item} style={infoCardContainerStyles.frontImage} />
                    ))}

                </Box>
            </Box>

            <Box sx={infoCardContainerStyles.rigthSideContainer}>
                <Typography sx={infoCardContainerStyles.productNameStyles}>{productObject.productName}</Typography>
                <Typography sx={infoCardContainerStyles.productPriceStyles}>{productObject.price}</Typography>
                <Typography sx={infoCardContainerStyles.productColorStyles}>{`Color: ${productObject.color}`}</Typography>
                <CardMedia component="img" src={productObject.image[0]} sx={infoCardContainerStyles.rightSideCardMedia} />
                <Typography sx={infoCardContainerStyles.descriptionTitleStyles}>DESCRIPCIÓN Y CARACTERÍSTICAS</Typography>
                <Typography sx={infoCardContainerStyles.descriptionStyle}>{productObject.description}</Typography>
                <Typography sx={infoCardContainerStyles.compositionStyles}>{`Composición: ${productObject.Composición}`}</Typography>
                <Box sx={infoCardContainerStyles.buttonContainer}>
                    <Button sx={infoCardContainerStyles.addToCardButton} variant="contained" onClick={handleProductsToCart}>Anadir al carro</Button>
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
