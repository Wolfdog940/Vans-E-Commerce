import { Box } from "@mui/material"
import { ExtraData } from "../../assets/mocks/ExtraData"
import { CardContainer } from "../../components/carContainer/CardContainer"
import { Footer } from "../../components/Footer/Footer"
import { TopImageLogo } from "../../components/TopImageLogo/TopImageLogo"



export const Home = ():JSX.Element => {
    return (
        <Box>
            <TopImageLogo logo={ExtraData.image}/>
            <CardContainer/>
            <Footer/>
        </Box>
    )
}
