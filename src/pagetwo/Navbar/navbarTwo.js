import React from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";



export default function Navbar({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={()=>navigation.navigate("HomeCrud")}>
                    <Text style={styles.logo}>Logo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo:{
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        zIndex:2
    },
    nav: {
        backgroundColor:"black",
        alignItems:'center',
        justifyContent:'space-between',
        height:40,
        flexDirection:'row',
        paddingHorizontal: 20,
    },
    inputText:{
        backgroundColor:'#fff',
        width: 173,
        height: 25,
        textAlign:"center",
        alignItems:'flex-end',
        justifyContent:'center'
    }
});