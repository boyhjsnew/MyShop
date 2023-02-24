const SignIn = (email ,password)=>(
    fetch('http://localhost:8080/api/login.php',{
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