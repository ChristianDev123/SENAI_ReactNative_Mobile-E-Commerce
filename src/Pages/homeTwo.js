import { KeyboardAvoidingView, ScrollView, View} from "react-native";
import { useState, useEffect } from "react";

import HomeApp from '../pagetwo/HomeApp/HomeApp'
import NavbarTwo from "../pagetwo/Navbar/navbarTwo";

export default function HomeTwo({navigation}) {
  const [content,setContent] = useState();
  useEffect(()=>setContent(navigation.state.params),[])
  return (
    <View style={{flex:1}}>
      {content != undefined && 
        <KeyboardAvoidingView>
            <NavbarTwo navigation={navigation} />          
            <HomeApp content={content} />
        </KeyboardAvoidingView>
      }
    </View>
  );
}
