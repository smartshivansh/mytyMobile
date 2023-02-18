import { StyleSheet , Image} from 'react-native'
import { GiftedChat ,   InputToolbar, Bubble , Send ,LeftAction, ChatInput, SendButton } from 'react-native-gifted-chat'
import Heder from '../../Componets/Heder';
import ws from '../../SocketConctions/Socketio';
import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform ,TouchableOpacity } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Sharing from 'expo-sharing';



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Can use this function below OR use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };




  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;

}
















export default function Chats() {


    const [messages, setMessages] = useState([]);
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
  
    useEffect(() => {
      registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });
  
      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, []);
  












useEffect(() =>{
  console.log(notification , 'fafaa')

 let newMessage =  GiftedChat.append(messages, "message");
 setMessages([...newMessage]);


})







   
   
    const onSend = (message) => {
      const currentMessage = message[0];
      console.log({ currentMessage });


      

      let { text } = currentMessage;

     




  
      let updatedMessages = GiftedChat.append(messages, message);
      setMessages([...updatedMessages]);
      //  console.log("updated messages on send", updatedMessages);
       
  
      ws.send(text); 


      
  
      // async function receiver(data) {
        //  console.log("receiver", data);



// const inmessage = {
//   _id: Math.round(Math.random() * 1000000),
//   text : data,
//   createdAt: new Date(),
  
// }

// setMessages(previousMessages => GiftedChat.append(previousMessages, inmessage))
       
//       }
//       ws.receive(receiver);
    };






    









      

















      const renderBubble = (props) => {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: '#D9D9D9',
                paddingLeft:10,
                paddingRight:10,
                borderTopLeftRadius:30,
                borderBottomLeftRadius:30,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 20,
                padding:5,

              },
              left: {
     paddingLeft:15,
     paddingRight:15, 
     padding:5,
     borderTopRightRadius: 30,
     borderBottomRightRadius: 30,
     borderTopLeftRadius: 0,
     borderBottomLeftRadius: 20,
    
     
            }
            }}
            textStyle={{
              right: {
                color: 'black',
              },
            }}
          />
        );
      };


      const renderSend = (props) => {
        return (
          <Send {...props}>
            <View style={{ backgroundColor:'#FFC700' , padding:12 , borderRadius:25 , bottom:-5 ,left:-10 }}>
              <Image 
              style={{height:20, width:20 ,  }}
                source={require('../../assets/cAssets/Vector.png')}
              />
            </View>
          </Send>
        );
      };

    
    











  return (
   <View style={{flex:1 , backgroundColor:'#ffffff' , marginTop:30}}>
    <View>
<Heder />
    </View>
      {/* messages={messages}
       onSend={messages => onSend(messages)}
      user={{
     _id: 1,
       }}

     */}





<View>
<Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
</View>






<GiftedChat
   renderBubble={renderBubble}
          infiniteScroll
          messages={messages}
          textInputStyle={{ backgroundColor: "#C4C5CB", borderRadius: 20 , padding:10  }}
        //   renderBubble={(props) => (
        //     <CustomMessageBubble currentMessage={props.currentMessage} />
        //   )}
          onSend={onSend}
          alwaysShowSend
          showUserAvatar={true}
          renderSend={renderSend}

          placeholder="Type your message here..."

          user={{
            _id: 1
              }}


        //   user={{
        //     _id: 1,
        //     name: user?.name ?? "User Undefined",
        //   }}
          alignTop={true}
          isTyping={true}
          renderInputToolbar={(props) => (
            <InputToolbar {...props} containerStyle={styles.messageInput} />

          )}


          renderAvatar={() => null}
          showAvatarForEveryMessage={true}
        
        



      







        />












    


<View>

</View>

   </View>
  )
}



const styles = StyleSheet.create({
   messageInput:{
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    borderTopColor:'#ffffff'

   }
})