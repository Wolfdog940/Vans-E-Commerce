import { Box, Grid } from "@mui/material"
import { ProductCard } from "../ProductCard/ProductCard"
import { SHOES,ACCESORIES,CLOTHES } from "../../assets/mocks/ProductData"
import {ToastContainer } from "react-toastify"
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

    const ramdonProducts =()=>{
        const ramdonShoes = SHOES.sort(() => 0.5 - Math.random()).slice(0, 4);
        const ramdonAccesories = ACCESORIES.sort(() => 0.5 - Math.random()).slice(0, 4);
        const ramdonClothes = CLOTHES.sort(() => 0.5 - Math.random()).slice(0, 4);

        return (
            ([ramdonShoes, ramdonAccesories, ramdonClothes].flat()).sort(()=> Math.random() - 0.5)
        )
        
    }
    
    return (
        <Box >
        {" "}
            <Grid container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',paddingTop:{xl:"10%",xs:"12%"}}}>
                {ramdonProducts()?.map((product: Products ,index:any ) => (
                    
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
