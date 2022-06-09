import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, KeyboardAvoidingView, Image } from "react-native";
import Navbar from "../HomePage/Navbar/navbar";
import Cards from "../HomePage/cards/cards";
import axios from "axios";

export default function HomeCrud({navigation}) {
  const [search, setSearch] = useState("");
  const [content, setContent] = useState();

  useEffect(()=>{
    axios.get(`https://crud-node-senai.herokuapp.com/searchbar?name=${search}&code=${search}`)
    .then(({data})=>setContent(data.rows))
  },[search]);

 useEffect(()=>{
  axios.get("https://crud-node-senai.herokuapp.com/all")
  .then(({data})=>setContent(data.rows))
 },[]);

  return (
    <View style={{flex:1, marginTop:25}}>
      <KeyboardAvoidingView>
        <Navbar state={search} changeState={setSearch} />
        <Image
          style={{width: "100%", height: 165}}
          source={require("../../assets/imagem.jpg")}
        />
        <Cards content={content} navigation={navigation}/>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}
