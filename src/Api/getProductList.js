const getProductList = async (id_type ,page) => {
    const url = `http://localhost:8080/api/product_by_type.php?id_type=${id_type}&page=${page}`
    return fetch(url).then(res =>res.json())
  };
export default getProductList