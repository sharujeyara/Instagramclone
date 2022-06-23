import React from 'react'
import { Text, SafeAreaView, StyleSheet} from 'react-native'
import Header from '../Components/Home/header';
import Post from '../Components/Home/post';
import Stories from '../Components/Home/stories';

function HomeScreen() { 
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Stories/>
            <Post/>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
      
        backgroundColor:"black",
         flex:1,
         resizeMode:"cover"
    },
    text:{
        color:"#fff"
    }
}) 

