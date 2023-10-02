type Styles = {
    [key: string]: {};
};


export const productCardStyles:Styles = {
    commonFlexCenter :{
        display:"flex",
        justifyContent:"center"
    },
    cardStyles:{
        minHeight:{
            sm:630,
            },
        margin:2,
        background:"rgba(169, 182, 201, 0.2)",
        borderRadius:3
    },
    cardMedia:{
        minwidth:"95%",
        maxHeight:{
            xl:"100%",
            lg:"80%",
            sm:"90%",
            xs:"90%"
        }
    },
    imageStyles:{
        width:"100%",
        marginTop:20,
        minHeight:"100%"
    },
    carouselBox:{
        display:"flex",
        alignItems:"center" ,
        flexDirection:"column",
        marginTop:2
    },
    mobilieStepper:{
        backgroundColor:"transparent" 
    },
    productNameStyle:{
        fontSize:12, 
        fontWeight:"bold"
    },
    priceStyle:{
        marginBottom:"3px",
        fontSize:20, 
        fontWeight:"bold",
        marginTop:3,
        position:"relative"
    },
    colorStyleContainer:{
        display:"flex",
        flexDirection:"row", 
        justifyContent:"space-between",
        alignItems:"center"
    },
    topographyColorStyle:{
        fontSize:17 ,
        fontWeight:"bold"
    },
    infoOutlinedIcon:{
        width:40,
        height:40 
    },
    addShoppingCartOutlinedIcon:{
        fontSize:40 
    }
}