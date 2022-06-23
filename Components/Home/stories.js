import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native'

import { User } from '../../data/userdata'


const Stories = () => {
    return (
        <View>
            <ScrollView
                horizontal
                showHorizontalScrollIndicator={false} >

                <View>
                    <Image
                        source={require("../../assets/P1.jpg")}
                        style={styles.image}
                    />
                    <Text style={styles.imagetext}>Sharu Jey..</Text>
                </View>

                <View>
                    <Image
                        source={require("../../assets/P2.jpg")}
                        style={styles.image} 
                    />
                    <Text style={styles.imagetext}>Renujayash</Text>
                </View>

                <View>
                    <Image
                        source={require("../../assets/P3.jpg")}
                        style={styles.image} 
                    />
                    <Text style={styles.imagetext}>Kisha loga..</Text>
                </View>

                <View>
                    <Image
                        source={require("../../assets/P4.jpg")}
                        style={styles.image} 
                    />
                    <Text style={styles.imagetext}>Karthi_03</Text>
                </View>

                <View>
                    <Image
                        source={require("../../assets/P5.jpg")}
                        style={styles.image} 
                    />
                    <Text style={styles.imagetext}>Sharu Jey..</Text>
                </View>

                <View>
                    <Image
                        source={require("../../assets/P6.png")}
                        style={styles.image} 
                    />
                    <Text style={styles.imagetext}>Sharu Jey..</Text>
                </View>

                <View>
                    <Image
                        source={require("../../assets/P7.jpg")}
                        style={styles.image} 
                    />
                    <Text style={styles.imagetext}>Sharu Jey..</Text>
                </View>

            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        borderRadius:50,
        width:75,
        height:75,
        marginLeft:10,
        borderWidth:3,
        borderColor:"#ff8508",
        resizeMode:"cover",
        marginTop:15
    },
    imagetext:{
        color:"white",
        marginLeft:10,
        marginTop:5,
        alignItems:"center",
        justifyContent:"center"
    }
})


export default Stories;


