import React from "react";
import {SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,} from 'react-native';
import ProductItem from "../components/productItem";
import { data2 } from "../assets/consts/data";
const Products = () => {
  return(
    <View style={styles.comtainer}>
      <Text style={styles.title}>All Products</Text>
      <View style={styles.prodcuts}>
        <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={data2}
        numColumns={2}
        renderItem={({item}) =><ProductItem 
        url={item.url}
        title={item.title}
        price={item.price}
        star={item.star}
        sale = {item.sale}/>}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  comtainer:{
    // marginVertical:15
  },
  title:{
    fontSize: 16,
    color: "#090F47",
    fontWeight: "bold"
  },
  prodcuts:{
    height:"auto",
    marginVertical:25
  }

})
export default Products;