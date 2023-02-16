import { View, Text , Image , StyleSheet } from 'react-native'
import React from 'react'

export default function Heder() {
  return (
    <View style={{marginHorizontal:10,  }}>
    

<View style={{ backgroundColor:'#ffffff' , height:70 }} >
<Image
        style={styles.tinyLogo}
        source={require('../assets/cAssets/myty.png')}
      />


    
</View>

<View style={{borderWidth:1, borderColor:'#00000' , }}></View>

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
       
    }
})