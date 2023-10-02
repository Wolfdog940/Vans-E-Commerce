import { Box } from "@mui/material"
import { ExtraData } from "../../assets/mocks/ExtraData"
import { CardContainer } from "../../components/CardContainer/cardContainer"
import { Footer } from "../../components/Footer/footer"
import { TopImageLogo } from "../../components/TopImageLogo/topImageLogo"



export const HomePage = ():JSX.Element => {
    return (
        <Box>
            <TopImageLogo logo={ExtraData.image}/>
            <CardContainer/>
            <Footer/>
        </Box>
    )
}
