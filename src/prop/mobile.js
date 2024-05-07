import MobileList from "./MobileList"

 
const book1 = {
    image :"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=70",
    title : "POCO M6 PRO 5G",
    Price : "9499 /-",
}

function Mobile(){
    return(
        <div>
            <MobileList image={book1.image} title={book1.title} price={book1.price}/>
        </div>
    )
}
export default Mobile