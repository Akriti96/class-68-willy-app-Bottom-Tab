import React from "react"
import {View,TouchableOpacity,Text,StyleSheet,KeyboardAvoidingView,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Search</Text>
                <Icon name="search1" color="red" size={250} />
            </View>
        )
    }
}