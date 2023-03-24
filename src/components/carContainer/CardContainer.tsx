import { Box, Grid } from "@mui/material"
import { ProductCard } from "../ProductCard/ProductCard"
import { SHOES } from "../../assets/mocks/ProductData"
import { TopImageLogo } from "../TopImageLogo/TopImageLogo"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


interface Products  {
    productId?: number,
    productName: string,
    color: string,
    description?: string,
    Composición: string,
    price: string,
    image:string[],
    quantity?:number 
}



export const CardContainer = ():JSX.Element => {


//   'product/1'

//   {path: 'product/:id', element: <ProductPage/>}

//   const {pathname} = useLocation()

//     SHOES.find((shoes) => shoes.productId === '1')


    
    return (
        <Box >
        {" "}
            <Grid container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',paddingTop:{xl:"10%",xs:"12%"}}}>
                {SHOES?.map((product: Products ,index:any ) => (
                    
                <ProductCard index={index} key={product.productId} product={product} />
                
                ))}
        
            </Grid>
            <Box width="5%">
                <ToastContainer
                    position="bottom-right"
                    autoClose={1000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    />
            </Box>
        </Box>
    )
}
