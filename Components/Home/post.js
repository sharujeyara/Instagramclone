import React from 'react'
import { View, Text,Divider } from 'react-native'


const Post = ({post}) => {
    return (
        <View>
            <Divider width={1} orientation='vertical'/>
            <Text style={{color:"white"}}>post</Text>
        </View>
    )
}

export default Post
