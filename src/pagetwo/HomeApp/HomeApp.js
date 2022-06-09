import { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Image, Text, KeyboardAvoidingView} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import Size from "../Size/Size";


export default function HomeApp({content}){
    const [dataProduct,setDataProduct] = useState();
    useEffect(()=>{
        setDataProduct(content);
    },[]);

    return(
        <>
            {dataProduct !== undefined &&
                <ScrollView>
                    <View style={{paddingHorizontal:10}}>
                        <View style={styles.cardSneakers}>
                            <Image
                                style={{width: "100%", height:300}}
                                source={{uri:`https://crud-node-senai.herokuapp.com/files/${dataProduct.nameImage}`}}
                            /> 
                        </View>
                        <View>
                            <Text style={styles.nameProduct}>{dataProduct.name}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center'}}>
                            <FontAwesome name="star" size={16} color="#daa520" style={{padding: 10}} />
                            <FontAwesome name="star" size={16} color="#daa520" style={{padding: 10}} />
                            <FontAwesome name="star" size={16} color="#daa520" style={{padding: 10}} />
                            <FontAwesome name="star" size={16} color="#daa520" style={{padding: 10}} />
                            <FontAwesome name="star-half-empty" size={16} color="#daa520" style={{padding: 10}} />
                        </View>
                        <Size/>
                        <Text style={styles.priceText}>R$ {String(dataProduct.unitValue).replace('.',",")}</Text>
                        <View>
                            <Text style={styles.descriptionText}>
                                {dataProduct.description}
                            </Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity style={styles.buyButton}>
                                <Text style={styles.txtBtn}>Comprar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            }
        </>
    );
}

const styles = StyleSheet.create({
    buyButton: {
        backgroundColor: '#CB2C2C',
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
        borderRadius:5
    },
    txtBtn:{
        color:"white",
        fontSize:25,
        textAlign:'center',
        padding:5
    },
    nameProduct:{
        color: "#000000",
        textAlign:'center',
        fontSize:26,
    },
    priceText:{
        fontSize: 20,
        color: 'black',
        padding:10
    },
    descriptionText:{
        color:"rgba(0,0,0,0.5)",
        fontSize:15,
        textAlign:"justify"
    }
})