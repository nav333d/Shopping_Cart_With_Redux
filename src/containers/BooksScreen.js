import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Books} from '../../Data';
import Products from '../components/Products';
import {connect}from 'react-redux';

class BooksScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
               <Products products={Books} onPress={this.props.addItemToCart}/>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addItemToCart :(product) => dispatch({type : 'ADD_TO_CART', payload : product})
    }
}

export default connect(null, mapDispatchToProps)(BooksScreen)

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})