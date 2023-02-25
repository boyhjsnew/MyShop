const Register = (name ,email,password) =>(
    fetch('http://192.168.1.152:8080/api/register.php', {
        method :"POST" ,
        headers : {
            Accept : 'application/json', 
            'Content-Type': 'application.js'
        },
        body : JSON.stringify({
            name ,
            email,
            password
        })
    }).then(res=>(res.text()))
)
export default Register