import React from "react";
import { View, FlatList,StyleSheet,Text,Image,ImageBackground ,TouchableOpacity} from "react-native";
import HomeDetail from "../src/components/HomeDetail";

import Header1 from "../src/components/Header1"

const DiaryScreen = ({navigation}) => {
  return (
    
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <Header1 />
    <View style={{height:120,width:'100%',justifyContent:'center',backgroundColor:'#F79242',alignItems:'center'}}>
<Text style={{fontSize:35,fontFamily:'serif',color:'#FFF'}}>Daily Diet</Text>

    </View>
    <TouchableOpacity
    onPress={()=>navigation.navigate('breakfast')}
    >
<ImageBackground
source={require('../src/img/breakfast.png')}
style={styles.image}
>
<View style={styles.tContainer}>
<Text style={styles.diet}>早餐</Text>
</View>
</ImageBackground>
</TouchableOpacity>
<ImageBackground
source={require('../src/img/lunch.png')}
style={styles.image}
>
<View style={styles.tContainer}>
<Text style={styles.diet}>午餐</Text>
</View>
</ImageBackground>
<ImageBackground
source={require('../src/img/dinner.png')}
style={styles.image}
>
<View style={styles.tContainer}>
<Text style={styles.diet}>晚餐</Text>
</View>
</ImageBackground>

    </View>
  );
};

const styles=StyleSheet.create({
  image: {
  width:'100%',
  height:150,
  flexDirection:'row',
justifyContent:'flex-end',
marginTop:15
  },
  tContainer:{
height:66,
width:140,
marginTop:59,
backgroundColor:'rgba(52, 52, 52, 0.39)',

justifyContent:'center',
alignItems:'center'
  },
  diet:{
color:'#fff',
fontSize:38,
opacity:1
  },
});

export default DiaryScreen;