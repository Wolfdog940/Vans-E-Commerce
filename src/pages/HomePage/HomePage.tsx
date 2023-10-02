import { Box } from "@mui/material"
import { ExtraData } from "../../assets/mocks/ExtraData"
import { CardContainer, Footer, TopImageLogo } from "../../components/index"



export const HomePage = ():JSX.Element => {
    return (
        <Box>
            <TopImageLogo logo={ExtraData.image}/>
            <CardContainer/>
            <Footer/>
        </Box>
    )
}
