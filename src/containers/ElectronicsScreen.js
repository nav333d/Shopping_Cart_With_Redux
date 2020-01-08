import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Products from '../components/Products'
import { Electronics } from '../../Data'
import { connect } from 'react-redux';
import {addItemToCart} from '../actions'

class ElectronicsScreen extends Component {

    static navigationOptions = {
        headerTitle: 'Electronics'
    }
    render() {
        return (
            <View style={styles.container}>
                <Products products={Electronics} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addItemToCart:(product) => dispatch(addItemToCart(product))
    }
}

export default connect(null,mapDispatchToProps)(ElectronicsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});