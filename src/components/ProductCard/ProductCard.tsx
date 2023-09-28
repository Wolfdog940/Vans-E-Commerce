import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MobileStepper from '@mui/material/MobileStepper';
import { Link } from 'react-router-dom';
import  { addProduct }  from "../../store/addToCarSlice/addToCarSlice"
import { useCustomDispatch, useCustomSelector} from '../../hooks/redux';
import { toast } from 'react-toastify';



type ProductProps = {
    product:{
        productId?: number ,
        productName: string,
        color?: string,
        description?: string,
        Composición?: string,
        price: string,
        image:string[],
        quantity?:number 
    }
    
}
export const ProductCard = ({product}:any):JSX.Element => {

    const dispatch = useCustomDispatch()

    const cart  = useCustomSelector((state)=>state);
    
    const { productName, color, price ,image, productId,quantity } = product

    const [counter, setCounter] = useState(0)

    

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
                id:productId,
                name:productName,
                price:price,
                image:image[0],
                quantity:quantity
                }))
                notify()
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
        <Grid item xl={3}  xs={12} lg={4} sm={6} sx={{display:"flex",justifyContent:"center"}} >
            <Card  sx={{width:"95%",maxHeight:"100%", margin:2,background:"rgba(169, 182, 201, 0.2)",borderRadius:3}}>
                <Box sx={{display:"flex",justifyContent:"center" }}>
                    <CardMedia   sx={{width:"95%",minHeight:{xl:"100%",lg:"80%",sm:"90%",xs:"90%"}}} >
                        <Link to={`/infoPage/${productId}`}>
                            <img  src={image[counter]} style={{width:"100%",marginTop:20,minHeight:"100%"}}/>
                        </Link>
                    </CardMedia>
                </Box>
                <CardContent>
                        <Box sx={{display:"flex",alignItems:"center" ,flexDirection:"column",marginTop:2}}>
                        <MobileStepper position='static' sx={{backgroundColor:"transparent" }}  steps={image.length} activeStep={counter} 
                            backButton={<IconButton   onClick={infiniteCarouselBackward}><ArrowBackIosIcon/></IconButton>}
                            nextButton={<IconButton  onClick={infiniteCarouselForward}><ArrowForwardIosIcon/></IconButton>}
                        />
                        <Typography component="h1" sx={{fontSize:12, fontWeight:"bold"}}>
                            {productName}
                        </Typography>
                        </Box>
                        <Box sx={{display:"flex",justifyContent:"center"}}>
                            <Typography sx={{marginBottom:"3px",fontSize:20, fontWeight:"bold",marginTop:3,position:"relative"}}>
                                {price} 
                            </Typography>
                        </Box>
                        <Box sx={{display:"flex",flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
                            <Typography sx={{fontSize:17 ,fontWeight:"bold"}}>
                                {`Color: ${color}`}
                            </Typography>
                            <IconButton onClick={handleClick}  sx={{width:60,height:60 }}>
                            <AddShoppingCartOutlinedIcon  sx={{fontSize:40 }}/>
                        </IconButton>
                        </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}






