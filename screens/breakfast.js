import React from "react";
import { View, FlatList,StyleSheet,ScrollView, Text,Image } from "react-native";
import HomeDetail from "../src/components/HomeDetail";


const breakfast = ({navigation}) => {
  return (
  <View>
      <Image style={{height:600,width:'100%'}}
      source={require('../src/img/breakfastok.png')}
      />

   
   </View>
   
  );
};

const styles=StyleSheet.create({
 
});

export default breakfast;