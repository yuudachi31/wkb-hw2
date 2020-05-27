import React from "react";
import { View, FlatList,StyleSheet,ScrollView, Text,Image } from "react-native";
import HomeDetail from "../src/components/HomeDetail";

import Header2 from "../src/components/Header2"
const NewReport = ({navigation}) => {
  return (
  <View>
      <Image style={{height:600,width:'100%'}}
      source={require('../src/img/1111.png')}
      />

   
   </View>
   
  );
};

const styles=StyleSheet.create({
 
});

export default NewReport;