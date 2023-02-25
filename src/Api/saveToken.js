import AsyncStorage from "@react-native-async-storage/async-storage";
const saveToken = async (token) => {
    try { 
        await AsyncStorage.setItem("@token", token);

    } catch (error) {
        console.log(error);
    }
}
export default saveToken