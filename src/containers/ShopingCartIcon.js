import React from 'react';
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import { withNavigation } from 'react-navigation'
 

const ShopingCartIcon = (props) => (
    <TouchableOpacity 
    style={{padding :8}}> 
        <View style={{
                position : 'absolute',height : 30, width :30, borderRadius : 15,
                backgroundColor : 'rgba(95,197,123,0.8)',right : 20, bottom : 18,
                justifyContent : 'center', alignItems : 'center',zIndex : 2000
                }}>
           <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.cartItems.length}</Text>
        </View>
        
        <Icon
        name="shopping-cart" 
        size={30}
        onPress={() => props.navigation.navigate('CartScreen')}
        />
       
       </TouchableOpacity>

)

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}


export default connect(mapStateToProps)(withNavigation(ShopingCartIcon ));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})