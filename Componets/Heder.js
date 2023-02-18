import { View, Text , Image , StyleSheet , TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';

export default function Heder() {
  const navigation = useNavigation();
  return (
    <View style={{marginHorizontal:10,  }}>
    



<View style={{ backgroundColor:'#ffffff' , height:70 }} >

<TouchableOpacity onPress={() => navigation.push('Notification')}>
<Ionicons name="notifications-outline" size={28} color="black"  style={styles.tinyLogo2} />
</TouchableOpacity>



<Image
        style={styles.tinyLogo}
        source={require('../assets/cAssets/myty.png')}
      />


    
</View>

<View style={{borderWidth:1, borderColor:'#00000' }}></View>

    </View>
  )
}











const styles = StyleSheet.create({
    tinyLogo:{
        height:22,
        width:22, 
        position:'absolute',
        alignSelf:'flex-end',
        top:24,
        right:20
       
    },
    tinyLogo2:{
        position:'absolute',
        alignSelf:'flex-end',
        top:24,
        right:55,
        
    }
     
  
})