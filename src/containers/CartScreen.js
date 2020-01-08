import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Products from '../components/Products';
import {removeItem} from '../actions'

class CartScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                {this.props.cartItems.length > 0 ?
                <Products
                onPress ={this.props.removeItem} 
                products={this.props.cartItems}/>
                : <Text>No Item to Show</Text>
                }
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        cartItems : state
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        removeItem : propduct =>dispatch(removeItem(propduct))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})