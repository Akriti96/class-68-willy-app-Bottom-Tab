import React from "react"
import { View, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
// Import vector icons
import Icon from 'react-native-vector-icons/Entypo';


export default class BookTransction extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                 <Icon name="book" backgroundColor="lightgreen" color ="blue"size={100}/>
                <Text>BookTransction</Text>
               
            </View>

        )
    }
}