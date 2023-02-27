import getToken from "./getToken";


const getOrderHistory = (token)=>(
    fetch('http://192.168.1.152:8080/api/order_history.php',{
        method :"POST" ,
        headers : {
            Accept : 'application/json', 
            'Content-Type': 'application.js'
        },
        body : JSON.stringify({
            token
        })
    }).then(res => res.json())
)

const getOders = async ()=>{
    
    try {
        const token = await getToken() ;
        if(token == '' || token =='TOKEN_KHONG_HOP_LE'){
            console.log("Sai token")
            return []
        }else{
            const arrayOrder = await getOrderHistory(token)
            return arrayOrder
        }
    } catch (error) {
        return []
    }

}
export default getOders ;