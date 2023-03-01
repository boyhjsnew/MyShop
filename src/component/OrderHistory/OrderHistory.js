//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import COLOR from '../../config/COLOR';
import SPACING from '../../config/SPACING';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
import getOders from '../../Api/getOrderHistory';

// create a component
const OrderHistory = () => {
    const [Orders, setOrders] =useState([]);

    useEffect(()=>{
        getOders().then(res =>setOrders(res))
    },[Orders])
   
    const { header, txtTittle,titileOrder,txtOrder,infoOrder , txtGreen,txtTotal,rowOrder,txtPurple} = styles
    return (
        <View style={styles.container}>
            <View style={header}>
                <View style={{ width: SPACING * 3 }}></View>
                <Text style={txtTittle}>Order History</Text>
                <TouchableOpacity>
                    <FontAwesome name='chevron-right' size={SPACING * 3} color={COLOR.white} ></FontAwesome>
                </TouchableOpacity>
            </View>

            <View style={{flex:1,marginTop:SPACING}}>
                <FlatList
                    key={item =>item.id}
                    data={Orders}
                    renderItem={({item }) => {
                        return <View style={rowOrder}>
                            <View style={txtOrder}>
                                <Text style={titileOrder}>Order id:</Text>
                                <Text style={titileOrder}>Order time:</Text>
                                <Text style={titileOrder}>Order Status:</Text>
                                <Text style={titileOrder}>Total:</Text>
                            </View>
                            <View style={infoOrder}>
                                <Text style={txtGreen}>ODID{item.id}</Text>
                                <Text style={txtPurple}>{item.date_order}</Text>
                                <Text style={txtGreen}>{item.status==0 ? 'Pending':'Completed' }</Text>
                                <Text style={txtTotal}>{item.total}</Text>
                            </View>
                        </View>
                    }}>
                </FlatList>
            </View>



        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: SPACING * 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        height: 80,
        backgroundColor: COLOR.primary
    },
    txtTittle: {
        alignSelf: 'center',
        color: COLOR.white,
        fontSize: SPACING * 2.5,
        fontWeight: '500'
    },
    rowOrder:{
        borderRadius:SPACING/2,
        marginVertical:SPACING/1.5,
        marginHorizontal:SPACING,
        backgroundColor:COLOR.white,
        shadowColor:'black',
        shadowOffset:{width:0, height:1} ,
        shadowOpacity:0.2,
        padding:SPACING*1.5 ,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    infoOrder:{
        alignItems:'flex-end'
    },
    titileOrder:{
        fontSize:SPACING *1.4,
        color:COLOR.gray ,
        fontWeight:'800',
        paddingTop:SPACING/1.3
    },
    txtGreen:{
        fontWeight:'400',
        color:COLOR.primary,
        paddingTop:SPACING/1.3
    },
    txtPurple:{
        fontWeight:'400',
        color:'purple',
        paddingTop:SPACING/1.3
    },
    txtTotal:{
        fontWeight:'800',
        color:'purple',
        paddingTop:SPACING/1.3
    }
});

//make this component available to the app
export default OrderHistory;
