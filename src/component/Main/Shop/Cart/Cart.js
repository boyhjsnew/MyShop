//import liraries
import { createStackNavigator } from '@react-navigation/stack';
import CartView from './CartView'
import { NavigationContainer} from '@react-navigation/native';
import ProductDetail from '../ProductDetail/ProductDetail';



const Stack = createStackNavigator();

// create a component

const Cart = (props) => {
  const {carts} =props

  return (
 
    <NavigationContainer
      independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='CartView'>
          {(props)=> <CartView {...props} carts ={carts}></CartView>}
        </Stack.Screen>
        <Stack.Screen
          name='ProductDetail'
          component={ProductDetail}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



//make this component available to the app
export default Cart;
