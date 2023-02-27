import getToken from "./getToken"
import getData from "./getData";
import saveData from "./saveData";

const Order = (token, carts) => (
    fetch('http://192.168.1.152:8080/api/cart.php', {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application.js'
        },
        body: JSON.stringify({
            'token': token,
            'arrayDetail': carts
            
        })
    }).then(res => (res.text()))
)

const SendOrder = async () => {
    try {
        const token = await getToken();
        const carts = await getData();
        // const sendOrder = await Order(token, carts);
        if(token != '' && carts.length > 0){
            let newArray = []
            {carts && carts.map(carts=>
                newArray.push({id : carts.products.id , quantity:carts.quantity})
            )}
           await Order(token ,newArray)
          
        }else{
            alert("Carts is null")
        }
     
    } catch (error) {
        console.log(error);
    }
}
export default SendOrder