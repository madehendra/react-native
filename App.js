import React from 'react';
import { Text,View,ScrollView,Image,StyleSheet, TextInput }  from 'react-native';

const styles = StyleSheet.create({
    kontainer :{borderWidth: 0, margin : 10},
    teks : {borderWidth:1, padding : 10,margin : 2,backgroundColor : '#81ecec', 
    textAlign : 'center'
    } ,
    teksHeader : {
      backgroundColor : '#f6e58d',
      textAlign : 'center',
      fontSize : 20,
      fontWeight : 'bold',
      padding : 20
    },
    batas : {
      borderTopWidth : 0,
      marginTop : 5
    }
  }
);

const Pembatas = () => {
  return(
    <View style = {styles.batas} ></View>
  );
}

const Photo =()=>{
  return(
    <View>
      <View style = {{flexDirection : 'row', alignItems : 'flex-start', justifyContent : 'center'}} >
        <View style = {{width : 100, height : 100}} >
          <Image source={{uri : 'http://placeimg.com/100/100/people/grayscale' }} style = {{width: 100, height: 100, borderRadius : 50}} ></Image>
        </View>
        <Pembatas />
        <View style = {{width : 100, height : 100}} >
          <Image source = {{uri : 'http://placeimg.com/100/100/animals/sepia'}} style = {{height : 100, width : 100, borderRadius : 50}}></Image>
        </View>
      </View>
    </View>
  );
}

const App = () => {
  return(
    <View style={styles.kontainer} >
      <Text style={styles.teksHeader} >Belajar Layoting React Native</Text>
      <Text style = {styles.teks}>Made Genta Sapajuna</Text>
      <Photo></Photo>
      <Pembatas />
      <TextInput  placeholder = "Masukkan Nama Anda" style = {{borderWidth : 1}} ></TextInput>
      <Text style = {styles.teks}>Hendra Suparyawan</Text>
    </View>
  );
}

export default App;