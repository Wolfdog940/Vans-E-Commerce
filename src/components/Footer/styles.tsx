type Styles = {
    [key: string]: {};
};

export const footerStyles:Styles = {
    footerContainer:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center", 
        maxHeight:125,width:"100%", 
        background:"rgba(169, 182, 201, 0.4)"
    },
    topographyStyle:{
        marginTop:1, 
        fontSize:10, 
        fontWeight:"bold", 
        color:"gray"
    },
    iconsContainer:{
        marginTop:1,
        marginBottom:1
    },
    iconStyle:{
        fontSize:25, 
        color:"gray"
    }
}