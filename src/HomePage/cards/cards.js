import { useEffect } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from "react-native";
import { Card } from "react-native-paper";
export default function Cards({content,navigation}) {  
  useEffect(()=>console.log(content),[])
  return (
    <FlatList
      data={content}
      numColumns={2}
      ListFooterComponent={<ActivityIndicator/>}
      renderItem={({ item })=>(<CardProducts item={item} navigation={navigation}/>)}
      keyExtractor={(item) => item.idProduct}
    /> 
  );
}

function CardProducts({item,navigation}){
  return(
    <View style={styles.body}>
      <View style={styles.cardSneakers}>
          <Card.Cover
          style={styles.card_Actions}
          source={{uri:`https://crud-node-senai.herokuapp.com/files/${item.nameImage}`}}
        />
        <Card.Actions style={styles.buttons}>
          <TouchableOpacity style={styles.buttonComprar} onPress={() => navigation.navigate("HomeTwo",item)}>
            <Text style={styles.textBtn}>Comprar</Text>
          </TouchableOpacity>
        </Card.Actions>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardSneakers: {
    backgroundColor:"#D9D9D9",
    margin: 10
  },
  card_Actions: {
    width: 170,
    height: 170,
    backgroundColor: "transparent",
  },
  buttons: {
    alignItems:"center",
    justifyContent:"center",
    marginTop:-45
  },
  buttonComprar: {
    backgroundColor: "#CB2C2C",
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn:{
    color:"#fff",
    fontWeight:"700"
  }
});

