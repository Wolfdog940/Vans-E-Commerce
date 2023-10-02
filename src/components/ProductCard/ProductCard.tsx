import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MobileStepper from '@mui/material/MobileStepper';
import { Link, useNavigate } from 'react-router-dom';
import  { addProduct }  from "../../store/addToCarSlice/addToCarSlice"
import { useCustomDispatch } from '../../hooks/redux';
import { toast } from 'react-toastify';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { productCardStyles } from '../index';


    

export const ProductCard = ({product}:any):JSX.Element => {

    const nav = useNavigate()

    const dispatch = useCustomDispatch()

    const { productName, color, price ,image, productId,quantity } = product

    const [counter, setCounter] = useState(0)

    

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
                id:productId,
                name:productName,
                price:price,
                image:image[0],
                quantity:quantity
                }))
                AddedToCartToast()
            }

    const handleRedirecctionToInfoPage = () => {
        nav(`/infoPage/${productId}`);
        window.scrollTo(0,0)
    }

    const infiniteCarouselForward =():void=>{
        setCounter(counter +1)
        if(counter == image.length-1) return(setCounter(0))
    }

    const infiniteCarouselBackward =():void=>{
        setCounter(counter -1)
        if(counter <= 0) return(setCounter(image.length-1))
    }

    return (
        <Grid item xl={3}  xs={12} lg={4} sm={6} sx={productCardStyles.commonFlexCenter} >
            <Card  sx={productCardStyles.cardStyles}>
                <Box sx={productCardStyles.commonFlexCenter}>
                    <CardMedia   sx={productCardStyles.cardMedia} >
                        <Link to={`/infoPage/${productId}`}>
                            <img  src={image[counter]} style={productCardStyles.imageStyles}/>
                        </Link>
                    </CardMedia>
                </Box>
                <CardContent>
                        <Box sx={productCardStyles.carouselBox}>
                        <MobileStepper position='static' sx={productCardStyles.mobilieStepper}  steps={image.length} activeStep={counter} 
                            backButton={<IconButton   onClick={infiniteCarouselBackward}><ArrowBackIosIcon/></IconButton>}
                            nextButton={<IconButton  onClick={infiniteCarouselForward}><ArrowForwardIosIcon/></IconButton>}
                        />
                        <Typography component="h1" sx={productCardStyles.productNameStyle}>
                            {productName}
                        </Typography>
                        </Box>
                        <Box sx={productCardStyles.commonFlexCenter}>
                            <Typography sx={productCardStyles.priceStyle}>
                                {price} 
                            </Typography>
                        </Box>
                        <Box sx={productCardStyles.colorStyleContainer}>
                            <Typography sx={productCardStyles.topographyColorStyle}>
                                {`Color: ${color}`}
                            </Typography>
                            <Box>
                                <IconButton onClick={handleRedirecctionToInfoPage}>
                                    <InfoOutlinedIcon sx={productCardStyles.infoOutlinedIcon}/>
                                </IconButton>
                                <IconButton onClick={handleProductsToCart}  sx={{width:60,height:60 }}>
                                <AddShoppingCartOutlinedIcon  sx={productCardStyles.addShoppingCartOutlinedIcon}/>
                            </IconButton>
                            </Box>
                        </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}






