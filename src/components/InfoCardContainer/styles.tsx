type Styles = {
    [key: string]: {};
};

export const styles:Styles = {
    infoCardContainer: { 
        display: "flex", 
        flexDirection: { 
            xl: "row", 
            xs: "column" 
        }, 
        justifyContent: { 
            xs: "center" 
        }, 
        alignItems: { 
            xs: "center" 
        },
        marginTop:{
            xl:"10%",
            xs:"20%"
        } 
    },
    cardMediaContainer:{ 
        display: "flex", 
        justifyContent: "center", 
        flexDirection: "column", 
        width: { 
            xl: "50%", 
            xs: "100%" 
        }, 
        alignItems: { 
            xs: "center" 
        } 
    },
    cardMedia:{ 
        border: "4px solid rgba(169, 182, 201, 0.2)", 
        marginLeft: { 
            xl: 1 
        }, 
        borderRadius: 5, 
        width: { 
            xs: "90%" 
        } 
    },
    frontImageBox:{ 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "center", 
        marginTop: 1, 
        marginBottom: 5 
    },
    frontImage :{ 
        border: "4px solid rgba(169, 182, 201, 0.2)", 
        marginLeft: 1, 
        borderRadius: 5, 
        width: "10%", 
        height: "100%" 
    },
    rigthSideContainer:{ 
        width: { 
            xl: "50%", 
            xs: "90%" 
        }, 
        marginLeft: { 
            xl: 10, 
            xs: 2 
        }, 
        marginRight: { 
            xs: 1 
        }, 
        direction: "flex", 
        alignItems: { 
            xs: "center" 
        }, 
        justifyContent: "center" 
    },
    productNameStyles:{ 
        fontSize: { 
            xl: 25, 
            xs: 20 
        }, 
        textAlign: { 
            xs: "center" 
        }, 
        fontWeight: "bold", 
        marginTop: "5%" 
    },
    productPriceStyles:{ 
        fontSize: 30, 
        fontWeight: "bold", 
        textAlign: { 
            xs: "center" 
        }, 
        marginBottom: 10, 
        marginTop: { 
            xs: 1 
        } 
    },
    productColorStyles:{ 
        fontSize: 15, 
        fontWeight: "bold", 
        marginLeft: 1, 
        marginTop: "20%" 
    },
    rightSideCardMedia:{ 
        border: "4px solid rgba(169, 182, 201, 0.2)", 
        borderRadius: 5, 
        cursor: "default", 
        width: "15%", 
        marginTop: 2 
    },
    descriptionTitleStyles:{ 
        fontSize: 15, 
        fontWeight: "bold", 
        marginTop: "20%" 
    },
    descriptionStyle:{ 
        marginTop: 2 
    },
    compositionStyles:{ 
        fontSize: 15, 
        fontWeight: "bold", 
        marginTop: "10%" 
    },
    buttonContainer:{ 
        display: "flex", 
        justifyContent: "center", 
        marginTop: { 
            xl: "5%", 
            xs: "5%" 
        }, 
        marginBottom: { 
            xs: "5%" 
        } 
    },
    addToCardButton:{ 
        background: "gray", 
        "&:hover": { 
            transform: "scale(1.2)",
            background: "gray" 
        } 
    }
}