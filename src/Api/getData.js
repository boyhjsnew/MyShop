import AsyncStorage from '@react-native-async-storage/async-storage';
 const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@cart');
      if (value !== null) {
        return JSON.parse(value) ;
      }
      return []
    } catch (error) {
      return [] ;
    }
  };
  export default  getData 