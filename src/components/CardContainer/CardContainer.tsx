import { Box, Grid } from "@mui/material"
import { ProductCard } from "../ProductCard/ProductCard"
import { SHOES,ACCESORIES,CLOTHES } from "../../assets/mocks/ProductData"
import {ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { useCustomSelector } from "../../hooks/redux";
import { styles }  from "./styles"

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

    const [ defaultProduct, setDefaultProduct] = useState<Array<Products>>()

    const filter = useCustomSelector((state)=>state.filter)

  

   useEffect(() => {
     filterObjetc()
    }, [filter])
   

  
    const randomProducts =()=>{
        const randomShoes = SHOES.sort(() => 0.5 - Math.random()).slice(0, 4);
        const randomAccesories = ACCESORIES.sort(() => 0.5 - Math.random()).slice(0, 4);
        const randomClothes = CLOTHES.sort(() => 0.5 - Math.random()).slice(0, 4);

        return (
            ([randomShoes, randomAccesories, randomClothes].flat()).sort(()=> Math.random() - 0.5)
        )
        
    }

    const filterObjetc = ()=>{
        if (Object.values(filter)[0] == 'SHOES'){
            setDefaultProduct(SHOES)
        }
        else if  (Object.values(filter)[0] == "CLOTHES"){
             setDefaultProduct(CLOTHES)
        }
        else if  (Object.values(filter)[0] == "ACCESORIES"){
             setDefaultProduct(ACCESORIES)
        }
        else setDefaultProduct(randomProducts())
        }

   
    
    return (
        <Box >
        {" "}
            <Grid container sx={styles.cardContainerGrid}>
                {defaultProduct?.map((product: Products ,index:Number ) => (
                    
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
