import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';

export default function Chat() {
  return (
    
      <View style={styles.container}>

        <View style={styles.header}>
            <Image style={{width: "20%", height: 35, resizeMode: 'contain'}} source={require("./assets/cAssets/mytyroundicon.png")} />
        </View>

        <View style={styles.textBox}></View>

        <View style={styles.footer}>
            <Image style={{width: "20%", height: 35, resizeMode: 'contain'}} source={require("./assets/cAssets/mytyroundicon.png")}  />
        </View>

      </View>
  );
}

const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: "100%",
    },
  
    header: {
        backgroundColor: "#f3f3f3",
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },

    textBox: {
        height: "80%",
        width: "100%",
        backgroundColor: "green"
    },

    footer: {
        width: "100%",
        height: "10%",
        backgroundColor: "red"
    }
});