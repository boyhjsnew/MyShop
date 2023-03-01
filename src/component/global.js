export default{
    //method 
    addProductToCart : null , 
    incrQuantity: null ,
    decrQuantity: null ,
    deleteCart: null,
    onSignIn:null , 
    jsUcfirst: function jsUcfirst(string) {
        return string.replace(/\b[a-z]/g, (x) => x.toUpperCase())
    },
    clickSearch :null,
    find:null,
    removeAllCart :null
};