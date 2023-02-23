import AsyncStorage from '@react-native-async-storage/async-storage';
const saveData = async (carts) => {
    try { 
        await AsyncStorage.setItem("@cart", JSON.stringify(carts));

    } catch (error) {
        console.log(error);
    }
}
export default saveData