import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';

export type Products =  {
    productId: number,
    productName: string,
    color: string,
    description?: string,
    Composición: string,
    price: string,
    image:string[]
    stars:JSX.Element,
    halfStart:JSX.Element,
    quantity?:number
}




export const SHOES:Products[]= [
    {
        productId:1,
        productName:"ZAPATILLAS ERA" ,
        color:"Negro" ,
        description:"Las zapatillas Era de Vans, inicialmente conocidas como las Vans n.º 95, vieron la luz en 1976 y fueron popularizadas por los legendarios Z-Boys de Santa Mónica" ,
        Composición: "Lona" ,
        price:"€ 70,00" ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN000QFKBKA-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000QFKBKA-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000QFKBKA-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000QFKBKA-ALT4?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:2,
        productName:"ZAPATILLAS COMFYCUSH OLD SKOOL" ,
        color:"Negro" ,
        description:"Vans ha renovado las clásicas Old Skool mediante la incorporación de lo último en tecnología ComfyCush: una suela nueva más suave y acolchada, para que cuando lleves" ,
        Composición: "ANTE Y LONA" ,
        price:"€ 90,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A3WMAVNE-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3WMAVNE-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3WMAVNE-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3WMAVNE-ALT6?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:3,
        productName:"ZAPATILLAS ULTRARANGE EXO SE" ,
        color:"Marrón" ,
        description:"En Vans creemos que la aventura comienza cuando las cosas empiezan a torcerse, así que decidimos desarrollar una zapatilla capaz no solo de resistir el viaje, sino también de preservar tu comodidad en las situaciones más incómodas." ,
        Composición: "ANTE, TELA, MATERIAL SINTÉTICO Y CAUCHO." ,
        price:"€ 120,00 " ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A4UWMDOL-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A4UWMDOL-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A4UWMDOL-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A4UWMDOL-ALT3?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:4,
        productName:"ZAPATILLAS SK8-HI" ,
        color:"Azul" ,
        description:"Vans ha renovado las clásicas Old Skool mediante la incorporación de lo último en tecnología ComfyCush: una suela nueva más suave y acolchada, para que cuando lleves" ,
        Composición: "ANTE Y LONA" ,
        price:"€ 90,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN000D5INVY-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000D5INVY-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000D5INVY-ALT4?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000D5INVY-ALT7?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:5,
        productName:"ZAPATILLAS CLASSIC SLIP-ON" ,
        color:"Azul" ,
        description:"Las zapatillas Classic Slip-On, presentadas por primera vez en 1977 bajo el nombre de Vans n .º 98, se convirtieron en un emblema de culto en el sur de California inmediatamente después de su lanzamiento." ,
        Composición: "LONA" ,
        price:"€ 70,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN000EYENVY-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0" ,
            "https://images.vans.com/is/image/VansEU/VN000EYENVY-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000EYENVY-ALT6?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000EYENVY-ALT7?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:6,
        productName:"ZAPATILLAS CHECKERBOARD OLD SKOOL SLIP-ON" ,
        color:"Negro, Gris",
        description:"Las zapatillas Classic Slip-On, presentadas por primera vez en 1977 bajo el nombre de Vans n .º 98, se convirtieron en un emblema de culto en el sur de California inmediatamente después de su lanzamiento." ,
        Composición: "LONA",
        price:"€ 75,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN000EYEBPJ-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000EYEBPJ-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000EYEBPJ-ALT3?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000EYEBPJ-ALT7?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:7,
        productName:"ZAPATILLAS OLD SKOOL" ,
        color:"Rojo",
        description:"Conocidas inicialmente como las Vans n.º 36, las zapatillas Old Skool hicieron su debut en 1977 con un nuevo detalle excepcional: un garabato dibujado al azar por el fundador Paul Van Doren, que se denominó la «jazz stripe» (raya de jazz). " ,
        Composición: "ANTE Y LONA.",
        price:"€ 80,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A38G15U7-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A38G15U7-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A38G15U7-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A38G15U7-ALT6?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:8,
        productName:"ZAPATILLAS AUTHENTIC" ,
        color:"Blanco",
        description:"Las Authentic, que nacieron en Anaheim (California) en 1966, son las zapatillas que cuentan con el diseño tradicional original de Vans." ,
        Composición: "LONA.",
        price:"€ 70,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN000EE3W00-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000EE3W00-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000EE3W00-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000EE3W00-ALT6?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:9,
        productName:"ZAPATILLAS VANS YACHT CLUB OLD SKOOL" ,
        color:"Multicolour",
        description:"Las Yatch Club Old Skool, el modelo de skate más emblemático de Vans y el primero en lucir la inconfundible banda latera" ,
        Composición: "Ante.",
        price:"€ 80,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A38G1R1Q-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A38G1R1Q-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A38G1R1Q-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A38G1R1Q-ALT5?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:10,
        productName:"ZAPATILLAS GUM AUTHENTIC" ,
        color:"Negro, Marrón",
        description:"Las zapatillas Gum Authentic, un diseño original y emblemático de Vans, son unas zapatillas de caña baja con cordones, dotadas de resistentes palas de lona" ,
        Composición: "Lona.",
        price:"€ 70,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN000TSVBXH-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000TSVBXH-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000TSVBXH-ALT5?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000TSVBXH-ALT7?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:11,
        productName:"ZAPATILLAS SLIP-ON TRK" ,
        color:"Negro",
        description:"Las zapatillas Trek Slip-On llevan la silueta Classic Slip-On a un nivel completamente nuevo." ,
        Composición: "Más de un 90 % de material sintético.",
        price:"€ 60,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A5HF8BLK-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A5HF8BLK-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A5HF8BLK-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A5HF8BLK-ALT9?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:12,
        productName:"ZAPATILLAS FLAME OLD SKOOL" ,
        color:"Negro",
        description:"Las Flame Old Skool, el modelo de skate clásico de Vans y el primero en llevar la inconfundible sidestripe" ,
        Composición: "Más de un 90 % de material sintético.",
        price:"€ 85,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A38G1PHN-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A38G1PHN-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A38G1PHN-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A38G1PHN-ALT6?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
]

export const CLOTHES:Products[]= [
    {
        productId:13,
        productName:"PANTALÓN VAQUERO DE CORTE HOLGADO",
        color:"Azul" ,
        description:"El pantalón Check-5 Loose Tapered de Nick Michel, confeccionado en un tejido vaquero de algodón grueso y dotado del clásico diseño de 5 bolsillos" ,
        Composición: "100% ALGODÓN" ,
        price:"€ 85,00" ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN000C9RLKZ-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000C9RLKZ-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000C9RLKZ-ALT5?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000C9RLKZ-ALT6?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:14,
        productName:"CAMISA DE BOTONES NICK MICHEL",
        color:"Azul" ,
        description:"Caracterizada por su atemporal diseño de cuadros clásicos, la camisa de botones Nick Michel está inspirada en una fotografía clásica de la leyenda del skate de Vans John Cardie" ,
        Composición: "100% ALGODÓN" ,
        price:"€ 65,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0008HRLKZ-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0008HRLKZ-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0008HRLKZ-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0008HRLKZ-ALT3?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:15,
        productName:"CAMISETA CON EL LOGOTIPO",
        color:"Blanco",
        description:"La camiseta Left Chest Logo está confeccionada en algodón 100 % de gran gramaje, cardado e hilado en anillos",
        Composición: "100 % ALGODÓN",
        price:"€ 24,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A3CZEYB2-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3CZEYB2-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3CZEYB2-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3CZEYB2-ALT3?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:16,
        productName:"CAMISETA DE MANGA RAGLÁN CLASSIC" ,
        color:"Blanco" ,
        description:"La camiseta de manga raglán Classic de Vans está confeccionada en algodón 100 %" ,
        Composición: "100 % ALGODÓN" ,
        price:"€ 38,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0002QQYB2-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0002QQYB2-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0002QQYB2-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0002QQYB2-ALT9?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:17,
        productName:"SUDADERA CON CAPUCHA VANS CLASSIC" ,
        color:"Negro, Blanco" ,
        description:"La sudadera con capucha Vans Classic está confeccionada en felpa con 60% de algodón y 40% de poliéster" ,
        Composición: "70% algodón y 30% poliéster" ,
        price:"€ 75,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0002QQYB2-ALT9?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0" ,
            "https://images.vans.com/is/image/VansEU/VN0A456BY28-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A456BY28-ALT3?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A456BY28-ALT9?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:18,
        productName:"ABRIGO DRILL CHORE" ,
        color:"Marrón, Beis",
        description:"La chaqueta Drill Chore sin forro se completa con cuello de pana, cierre delantero con botones de presión" ,
        Composición: "100% lona de algodón",
        price:"€ 80,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A3WF1H3G-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3WF1H3G-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3WF1H3G-ALT4?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3WF1H3G-ALT9?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:19,
        productName:"SUDADERA CON CAPUCHA VANS CLASSIC" ,
        color:"Gris",
        description:"La sudadera con capucha Vans Classic está confeccionada en felpa con 60% de algodón y 40% de poliéster" ,
        Composición: "60% algodón y 40% poliéster",
        price:"€ 75,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A456BADY-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A456BADY-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A456BADY-ALT9?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A456BADY-ALT9?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:20,
        productName:"PANTALÓN CHINO ENTALLADO AUTHENTIC" ,
        color:"Gris",
        description:"El pantalón chino Authentic se caracteriza por su corte, estilo y durabilidad" ,
        Composición: "64% algodón, 34% poliéster, 2% Lycra",
        price:"€ 72,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A5FJ71O7-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A5FJ71O7-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A5FJ71O7-ALT3?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A5FJ71O7-ALT10?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:21,
        productName:"CHAQUETA GARNETT" ,
        color:"Negro",
        description:"La Garnett es una chaqueta cortavientos confeccionada en nailon 100% y dotada de un forro de malla de poliéster 100%" ,
        Composición: "Exterior: 100% nailon.Forro: 100% poliéster",
        price:"€ 80,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A457195Y-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A457195Y-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A457195Y-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A457195Y-ALT4?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:22,
        productName:"CHAQUETA RILEY" ,
        color:"Negro",
        description:"La chaqueta Riley está confeccionada en nailon 100% resistente al agua y dotada de un forro integra" ,
        Composición: "Exterior: 100% nailon.Capucha y forro: 70% algodón, 30% poliéster",
        price:"€ 95,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A3HOUBLK-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3HOUBLK-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3HOUBLK-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3HOUBLK-ALT4?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:23,
        productName:"SUDADERA DE CUELLO REDONDO FLAME VANS X THRASHER" ,
        color:"Negro",
        description:"La camiseta de cuello redondo Flame Vans x Thrasher, con el emblemático logotipo de Thrasher con un toque «Off The Wall" ,
        Composición: "100% ALGODÓN",
        price:"€ 78,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0006XEBLK-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0006XEBLK-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0006XEBLK-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0006XEBLK-ALT4?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:24,
        productName:"CHAQUETA ACOLCHADA PROSPECT MTE-1" ,
        color:"Negro",
        description:"Vans MTE es el subproducto de un estilo de vida al aire libre, porque sabemos que la persecución de tus pasiones no siempre va acompañada de un pronóstico de buen tiempo" ,
        Composición: "COMPOSICIÓN EXTERIOR: 100% NAILON.FORRO: 100% POLIÉSTER",
        price:"€ 125,00",
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A7S8HBLK-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A7S8HBLK-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A7S8HBLK-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A7S8HBLK-ALT3?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0"
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
]

export const ACCESORIES:Products[]= [
    {
        productId:25,
        productName:"MOCHILA DX SKATEPACK DE VANS" ,
        color:"Verde" ,
        description:"La mochila DX Skatepack de Vans, ideal tanto para la pista de skate como para cualquier aventura que te depare el día, está confeccionada en CORDURA®" ,
        Composición: "COMPOSICIÓN EXTERIOR: 100% POLIÉSTER. FORRO: 100%" ,
        price:"€ 90,00" ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A7SCJZBF-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A7SCJZBF-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A7SCJZBF-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A7SCJZBF-ALT6?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:26,
        productName:"MOCHILA OLD SKOOL H2O" ,
        color:"Amarillo" ,
        description:"Nuestro equipo se ha fijado objetivos de sostenibilidad ambiciosos" ,
        Composición: "COMPOSICIÓN EXTERIOR: 100% POLIÉSTER. FORRO: 100%" ,
        price:"€ 48,00" ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A5I13OC2-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A5I13OC2-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A5I13OC2-ALT3?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A5I13OC2-ALT4?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:27,
        productName:"GORRO CON BORDE VUELTO BRUCKNER" ,
        color:"Beis" ,
        description:"El gorro Bruckner con borde vuelto está confeccionado en 100% acrílico y cuenta con una etiqueta clásica con el logotipo de la marca." ,
        Composición: "100% acrílico, salvo elementos decorativos" ,
        price:"€ 28,00" ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A3I5L2N1-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3I5L2N1-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3I5L2N1-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3I5L2N1-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:28,
        productName:"GAFAS DE SOL SPICOLI" ,
        color:"Negro" ,
        description:"Las gafas de sol Spicoli de Vans están fabricadas en policarbonato 100 %" ,
        Composición: "Montura: 100 % policarbonato; lentes: 100 % policarbonato" ,
        price:"€ 18,00 " ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN000LC0BLK-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000LC0BLK-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000LC0BLK-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN000LC0BLK-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:29,
        productName:"BANDOLERA CONSTRUCT" ,
        color:"Negro, blanco" ,
        description:"La bandolera Construct está confeccionada a base de fibras CORDURA®, famosas por su durabilidad y resistencia a la abrasión" ,
        Composición: "Exterior: 100% poliéster. Forro: 100% poliéster" ,
        price:"€ 42,00" ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A4RWYY28-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A4RWYY28-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A4RWYY28-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A4RWYY28-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:30,
        productName:"BOLSO VANS CON CREMALLERA" ,
        color:"Negro" ,
        description:"El bolso con cremallera de Vans luce el estampado Checkerboard integral y el logotipo de Vans" ,
        Composición: "EXTERIOR: 100% POLIÉSTER. FORRO: 100% POLIÉSTER" ,
        price:"18,00 " ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A7SCNBLK-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A7SCNBLK-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A7SCNBLK-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A7SCNBLK-ALT3?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:31,
        productName:"GAFAS DE SOL DUNVILLE" ,
        color:"Marrón" ,
        description:"Las gafas de sol Dunville están fabricadas en 53% policarbonato y 47% cuproníquel" ,
        Composición: "Montura: 53% policarbonato, 47% cuproníquel. Lentes: 100% policarbonato" ,
        price:"€ 22,00 " ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A3HIQPA9-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3HIQPA9-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3HIQPA9-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3HIQPA9-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:32,
        productName:"BANDOLERA WARD" ,
        color:"Negro" ,
        description:"La riñonera Ward está confeccionada en tejido CORDURA® de nailon 100%, conocido por su durabilidad y resistencia a las abrasiones" ,
        Composición: "Exterior: 100% nailon. Forro: 100% poliéster" ,
        price:"€ 42,00" ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A2ZXX6ZC-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A2ZXX6ZC-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A2ZXX6ZC-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A2ZXX6ZC-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:33,
        productName:"MOCHILA DE SNOWBOARD CONSTRUCT" ,
        color:"Negro" ,
        description:"deal para un día en las pistas, la mochila de snowboard Construct está confeccionada a base de fibras CORDURA®," ,
        Composición: "EXTERIOR: 100% POLIÉSTER. FORRO: 100% POLIÉSTER" ,
        price:"€ 100,00" ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A7SCILJV-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A7SCILJV-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A7SCILJV-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A7SCILJV-ALT4?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:34,
        productName:"GAFAS DE SOL HIP CAT" ,
        color:"Púrpura" ,
        description:"La clásica forma de ojos de gato aporta un toque refinado a las gafas de sol Hip Cat con un estilo de inspiración vintage" ,
        Composición: "100% POLICARBONATO" ,
        price:"€ 18,00" ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A47RHC8B-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A47RHC8B-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A47RHC8B-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A47RHC8B-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:35,
        productName:"MOCHILA WARP SLING" ,
        color:"Negro" ,
        description:"La Warp Sling Bag combina toda la funcionalidad de una mochila con el estilo actual de una bandolera" ,
        Composición: "EXTERIOR: 100% NAILON. RIBETE: 85% NAILON " ,
        price:"42,00" ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN0A3I6B6ZC-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3I6B6ZC-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3I6B6ZC-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN0A3I6B6ZC-ALT3?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
    {
        productId:36,
        productName:"BANDOLERA OUT AND ABOUT II" ,
        color:"Marrón" ,
        description:"La bandolera Out And About II de Vans tiene una correa ajustable para mayor comodidad" ,
        Composición: "COMPOSICIÓN EXTERIOR: 100% POLIÉSTER" ,
        price:"€ 40,00" ,
        image:[
            "https://images.vans.com/is/image/VansEU/VN00035F0E0-HERO?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN00035F0E0-ALT1?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN00035F0E0-ALT2?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
            "https://images.vans.com/is/image/VansEU/VN00035F0E0-ALT3?wid=800&hei=800&fmt=jpg&qlt=85,1&op_sharpen=0&resMode=sharp2&op_usm=1,1,1,0",
        ],
        stars:<StarBorderOutlinedIcon/>,
        halfStart:<StarHalfOutlinedIcon/>,
        quantity:1
    },
]