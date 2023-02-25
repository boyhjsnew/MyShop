const SignIn = (email ,password)=>(
    fetch('http://192.168.1.152:8080/api/login.php',{
        method :"POST" ,
        headers : {
            Accept : 'application/json', 
            'Content-Type': 'application.js'
        },
        body : JSON.stringify({
            email,
            password
        })
    }).then(res => res.json())
)
export default SignIn ;