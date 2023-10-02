import { Box } from "@mui/material"
import { ExtraData } from "../../assets/mocks/ExtraData"
import { CardContainer } from "../../components/CarContainer/CardContainer"
import { Footer } from "../../components/Footer/Footer"
import { TopImageLogo } from "../../components/TopImageLogo/TopImageLogo"



export const HomePage = ():JSX.Element => {
    return (
        <Box>
            <TopImageLogo logo={ExtraData.image}/>
            <CardContainer/>
            <Footer/>
        </Box>
    )
}
