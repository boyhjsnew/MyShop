const getSearch = (key) =>(
    fetch(`http://192.168.1.152:8080/api/search.php?key=${key}`, {
    }).then(res=>res.json())
)
export default getSearch