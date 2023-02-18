import { View, Text, StyleSheet ,TouchableOpacity , Image } from 'react-native'
import React from 'react'
import Heder from '../Componets/Heder'
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Notify from './Navigation/Notify';


export default function Notification() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', marginTop: 30 }}>
        


        <View style={{ backgroundColor:'#ffffff' , height:70 }} >

<TouchableOpacity onPress={() => navigation.goBack()}>
<Ionicons name="arrow-back" size={30} color="black"  style={styles.tinyLogo2}  />
</TouchableOpacity>



<Image
        style={styles.tinyLogo}
        source={require('../assets/cAssets/myty.png')}
      />


    
</View>

<View style={{borderWidth:1, borderColor:'#00000' }}></View>





            <View>
                <Text style={styles.topread}>Mark as read</Text>
            </View>




            <View style={{ marginTop: 40 ,padding:20  }}>



 <View style={{marginVertical:10}}>

                <View style={styles.Notificationbox}>

                    <View style={styles.dot}></View>

                    <View>
                        <Text style={styles.text1}>Thank You for joining myty</Text>
                        <Text style={styles.text2}>12 Feb 2023 at 12:00 PM</Text>
                    </View>
                </View>
            <View style={styles.boder}></View>


            </View>









            <View style={{marginVertical:10}}>

                <View style={styles.Notificationbox}>

                    <View style={styles.dot}></View>

                    <View>
                        <Text style={styles.text1}>Near by cafe</Text>
                        <Text style={styles.text2}>12 Feb 2023 at 12:00 PM</Text>
                    </View>
                </View>
            <View style={styles.boder}></View>



</View>










<View style={{marginVertical:10}}>
            
                <View style={styles.Notificationbox}>

                    <View style={styles.dot}></View>

                    <View>
                        <Text style={styles.text1}>Book your myty link</Text>
                        <Text style={styles.text2}>12 Feb 2023 at 12:00 PM</Text>
                    </View>
                </View>
            <View style={styles.boder}></View>



            </View>







<View style={{marginVertical:10}}>


                <View style={styles.Notificationbox}>

                    <View style={styles.dot}></View>

                    <View>
                        <Text style={styles.text1}>Great chance to be a part of myty</Text>
                        <Text style={styles.text2}>12 Feb 2023 at 12:00 PM</Text>
                    </View>
                </View>
            <View style={styles.boder}></View>







            </View>










            </View>










        </View>
    )
}


const styles = StyleSheet.create({
    topread: {
        position: 'absolute',
        alignSelf: 'flex-end',
        color: '#0075FF',
        fontSize: 8,
        right: 10,
        padding: 10
    },
    Notificationbox: {
        flexDirection: 'row',
    
        


    },
    text1: {
        fontSize: 12,
        fontWeight: '700',
        color: '#000000'

    },
    text2: {
        fontSize: 8,
        fontWeight: '400',
        color: '#000000'
    }, 
    dot:{
        width: 10, height: 10, backgroundColor: '#FFC700', borderRadius: 10, marginHorizontal:10 , margin:5
    },
    boder:{height:1, backgroundColor:'#E3E3E3' , marginTop:10 },
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
        alignSelf:'flex-start',
        top:24,
        left:20
        
    }
})