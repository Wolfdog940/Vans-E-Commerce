type Styles = {
    [key: string]: {};
};


export const styles:Styles = {
    appBarStyles:{
        background:"rgb(255,255,255,0.9)",
        boxShadow:"none" 
    },
    topContainer:{
        display:"flex", 
        justifyContent:"space-between",
        alignItems:"center"
    },
    cardMedia:{
        maxWidth:{
            xl:"10%",
            lg:"10%",
            sm:"10%",
            xs:"25%"
        },
        paddingY:{
            xl:2,
            lg:2,
            sm:1,
            xs:1
        },
        paddingX:{
            xl:8,
            xs:2,
            lg:6,
            sm:4
        }
    },
    iconButtonStyle:{
        width:70, 
        height:70, 
        marginRight:{
            xl:5,
            xs:1
        }
    },
    shoppingCartIcon: {
        fontSize:40,
        color:"blue"
    }
}