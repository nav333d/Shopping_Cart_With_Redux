import React,{Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/containers/HomeScreen';
import ElectronicScreen from './src/containers/ElectronicsScreen';
import BooksScreen from './src/containers/BooksScreen';
import ShopingCartIcon from './src/containers/ShopingCartIcon';
import CartScreen from './src/containers/CartScreen';

class ShopingCart extends Component{
   
    render(){
        return (
            <Appmode />
        )
    }
}


const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Electronics : ElectronicScreen,
    Books : BooksScreen,
    CartScreen : CartScreen
},{
    defaultNavigationOptions:{
        headerTitle : 'Shopping App',
        headerRight:(
            
            <ShopingCartIcon  />
         
        )
    }
},
)

const  Appmode = createAppContainer(AppStackNavigator)

export default ShopingCart

