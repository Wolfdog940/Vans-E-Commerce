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
