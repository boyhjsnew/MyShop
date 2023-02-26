const updateInfo = (token, name,address, phone)=>(
    fetch('http://192.168.1.152:8080/api/change_info.php',{
        method :"POST" ,
        headers : {
            Accept : 'application/json', 
            'Content-Type': 'application.js'
        },
        body : JSON.stringify({
            token, name , address, phone
        })
    }).then(res => res.json())
)
export default updateInfo ;