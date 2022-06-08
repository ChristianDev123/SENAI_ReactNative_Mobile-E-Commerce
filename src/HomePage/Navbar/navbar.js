import React from "react";
import { StyleSheet, Text, TextInput , View} from "react-native";



export default function Navbar({state, changeState}){

    return(
        <View style={styles.nav}>
            <Text style={styles.logo}>Logo</Text>
            <TextInput
            value={state}
            onChangeText={(text) => changeState(text)}
            style={styles.inputText}
            placeholder="Pesquisar"/> 
        </View>
    );
}

const styles = StyleSheet.create({
    logo:{
        color: 'white'
    },
    nav: {
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    inputText:{
        backgroundColor:'#fff',
        width: 173,
        height: 25,
        textAlign:"center",
        alignItems:'flex-end',
        justifyContent: 'center'
    }
});