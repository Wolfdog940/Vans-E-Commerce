//Por que pathName  de useLocation , pathName es mas corto pero useParams creo que seria mas correcto y solo es un condicional mas

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ExtraData } from "../../assets/mocks/ExtraData";
import { SHOES,ACCESORIES,CLOTHES } from "../../assets/mocks/ProductData";
import { Footer,InfoCardContainer,TopImageLogo  } from "../../components/index";


export const InfoPage = () => {

    const { pathname } = useLocation();

    //const id:number= parseInt(pathname.split("/").slice(-1)[0])

    const [ frontImage, setFrontImage] = useState<number>(0)

    const { id } = useParams<{id:string}>();

    


    const productObject = () =>{
        
        if(id !== undefined){
            
            if (parseInt(id) <= 12){
                return  SHOES.find((shoes) => shoes.productId === parseInt(id))
                    
            }else if (parseInt(id) > 12 && parseInt(id) <=24 ){
                return  CLOTHES.find((clothes) => clothes.productId === parseInt(id))
                    
            }else {
                return ACCESORIES.find((accesories) => accesories.productId === parseInt(id))
                    
            }
            
        }
    }
    

    return (
    <>
        <TopImageLogo logo={ExtraData.image} />
        <InfoCardContainer productObject={productObject()} setFrontImage={setFrontImage} frontImage={frontImage}/>
        <Footer/>
    </>
    
    )
}
