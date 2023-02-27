import getToken from "./getToken";
import saveToken from '../Api/saveToken';



const getNewToken = (token) => (

    fetch('http://192.168.1.152:8080/api/refresh_token.php', {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application.js'
        },
        body: JSON.stringify({
            token
        })
    }).then(res => res.text())
)

const refreshToken = async () => {

    try {
        const token = await getToken(); 
        if(token ==='' || token == 'TOKEN_KHONG_HOP_LE'){
            console.log("Chua Co token")
        }else{
            const newToken = await getNewToken(token)
            await saveToken(newToken) ;
            console.log(newToken)
        }

    } catch (error) {
        console.log(e);
    }
}

export default refreshToken;