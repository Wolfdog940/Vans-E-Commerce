import {  useState } from "react";
import { useLocation } from "react-router-dom";
import { ExtraData } from "../../assets/mocks/ExtraData";
import { SHOES,ACCESORIES,CLOTHES } from "../../assets/mocks/ProductData";
import { Footer } from "../../components/Footer/footer";
import { InfoCardContainer } from "../../components/InfoCardContainer/infoCardContainer";
import { TopImageLogo } from "../../components/TopImageLogo/topImageLogo";

export const InfoPage = () => {

    const { pathname } = useLocation();

    const id:number= parseInt(pathname.split("/").slice(-1)[0])

    const [ frontImage, setFrontImage] = useState<number>(0)


    const productObject = () =>{
        
        if (id <= 12){
            return  SHOES.find((shoes) => shoes.productId === id)
            
        }else if (id > 12 && id <=24 ){
            return  CLOTHES.find((clothes) => clothes.productId === id)
            
        }else {
            return ACCESORIES.find((accesories) => accesories.productId === id)
            
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
