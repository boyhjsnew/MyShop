const checkLogin = (token)=>(
    fetch('http://192.168.1.152:8080/api/check_login.php',{
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
export default checkLogin ;