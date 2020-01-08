import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class HomeScreen extends Component{
    
    render(){
        return (
            <View style={styles.container}>
                <View style={{margin : 15}}>
                <Button 
                    title="ELECTRONICS"
                    onPress={()=> this.props.navigation.navigate('Electronics')}
                  
                />
                </View>
                 <Button 
                    title="BOOKS"
                    onPress={()=> this.props.navigation.navigate('Books')} 
                />
               
               
            </View>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})