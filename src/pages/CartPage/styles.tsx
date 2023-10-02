type Styles = {
    [key: string]: {};
};

export const styles = {
    columsPhotoUrl:{
        width:50
    },
    cardPageContainer:{
        display: 'flex',
        justifyContent:"center" ,
        alignItems:"center",
        flexDirection:"column",
        marginTop:{
            xl:10,
            xs:6
        },

    },
    storeIconStyles:{
        color :"rgba(169, 182, 201, 0.6)",
        fontSize:80,
        marginTop:"5%"
    },
    myCardTypography:{
        fontSize:40, 
        color :"rgba(169, 182, 201, 0.8)",
        borderBottom:"4px solid rgba(169, 182, 201, 0.8)",
        width:{xl:"50%",xs:"80%"},
        textAlign:"center"
    },
    dataGridContainer:{ 
        height: 400,
        width: '80%',
        display:"flex",
        justifyContent:"center"
    },
    emptyDataGridText:{
        fontSize:40,
    },
    dataGridStyles:{
        border:0 ,
        display:{
            xl:"flex",
            lg:"flex",
            md:"flex",
            sm:"flex"
            },
        alignItems:{
            xl:"center",
            lg:"center",
            md:"center",
            sm:"center"
        }
    },
    totalToPayBox:{
        display: 'flex',
        justifyContent:"space-between",
        width:{
            xl:"35%",
            xs:"80%"
        },
        marginBottom:5
    },
    totalToPayTextStyle:{
        fontSize:25
    },
    totalToPayAmount:{
        fontSize:25,
        fontFamily:"bold"
    },
    openModalButton:{
        marginBottom:2
    },
    DialogActionsStyle:{
        display:"flex",
        justifyContent:"center",
        paddingY:5
    }
}   