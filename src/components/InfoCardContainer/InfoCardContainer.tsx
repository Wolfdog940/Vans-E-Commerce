import { Box, Button, CardMedia, Typography } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify'
import { useCustomDispatch } from '../../hooks/redux'
import { addProduct } from '../../store/addToCarSlice/addToCarSlice'
import { styles } from './styles'

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
    <Box sx={styles.infoCardContainer}>
            <Box sx={styles.cardMediaContainer}>
                <CardMedia component="img" src={productObject.image[frontImage]} sx={styles.cardMedia}/>
                <Box sx={styles.frontImageBox}>

                    {productObject.image.map((item: any, index: any) => (
                        <img id={index} key={index} onClick={() => setFrontImage(productObject.image.indexOf(item))} src={item} style={styles.frontImage} />
                    ))}

                </Box>
            </Box>

            <Box sx={styles.rigthSideContainer}>
                <Typography sx={styles.productNameStyles}>{productObject.productName}</Typography>
                <Typography sx={styles.productPriceStyles}>{productObject.price}</Typography>
                <Typography sx={styles.productColorStyles}>{`Color: ${productObject.color}`}</Typography>
                <CardMedia component="img" src={productObject.image[0]} sx={styles.rightSideCardMedia} />
                <Typography sx={styles.descriptionTitleStyles}>DESCRIPCIÓN Y CARACTERÍSTICAS</Typography>
                <Typography sx={styles.descriptionStyle}>{productObject.description}</Typography>
                <Typography sx={styles.compositionStyles}>{`Composición: ${productObject.Composición}`}</Typography>
                <Box sx={styles.marginBottom}>
                    <Button sx={styles.addToCardButton} variant="contained" onClick={handleProductsToCart}>Anadir al carro</Button>
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
