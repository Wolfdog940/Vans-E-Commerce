import { Box, Button, CardMedia, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ExtraData } from "../../assets/mocks/ExtraData";
import { SHOES } from "../../assets/mocks/ProductData";
import { Footer } from "../../components/Footer/Footer";
import { InfoCardContainer } from "../../components/InfoCardContainer/InfoCardContainer";
import { TopImageLogo } from "../../components/TopImageLogo/TopImageLogo";

export const InfoPage = () => {

    const { pathname } = useLocation();

    const id:number= parseInt(pathname.split("/").slice(-1)[0])

    const [ frontImage, setFrontImage] = useState<number>(0)

    const productObject:any = SHOES.find((shoes) => shoes.productId === id)

    const index:number =productObject.image.indexOf(productObject.image[0])

    return (
    <>
        <TopImageLogo logo={ExtraData.image} />
        <InfoCardContainer productObject={productObject} setFrontImage={setFrontImage} frontImage={frontImage}/>
        <Footer/>
    </>
    
    )
}
