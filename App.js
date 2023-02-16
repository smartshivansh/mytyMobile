import { View, Text , Alert } from 'react-native'
import React,{useEffect} from 'react'
import MainScreen from './MainScreen'


  import { Notify } from './Screens/Navigation/Notify'






export default function App() {


// const  requestUserPermission = async () => {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       console.log('Authorization status:', authStatus);
//     }
// }



// useEffect (() => {
//   if(requestUserPermission) {
//     // return fmc token

// messaging().getToken.than(token => {
//   console.log(token)
// })
//   }else{
// console.log("fail token status" , authStatus)
//   }


//  // Check whether an initial notification is available
//  messaging()
//  .getInitialNotification()
//  .then( async(remoteMessage) => {
//    if (remoteMessage) {
//      console.log(
//        'Notification caused app to open from quit state:',
//        remoteMessage.notification,
//      );
//    }
  
//  });



//   // Assume a message-notification contains a "type" property in the data payload of the screen to open

//   messaging().onNotificationOpenedApp(remoteMessage => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification,
//     );
//     // navigation.navigate(remoteMessage.data.type);
//   });



  
// // Register background handler
// messaging().setBackgroundMessageHandler((remoteMessage)  => {
//   console.log('Message handled in the background!', remoteMessage);
// });


// const unsubscribe = messaging().onMessage(async remoteMessage => {
//   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
// });

// return unsubscribe;


// },[])






// const { registerForPushNotificationsAsync, handleNotificationResponse } =
//   Notify()


// useEffect (() => {
  
//   registerForPushNotificationsAsync();
//   Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//       shouldShowAlert: true,
//       shouldPlaySound: false,
//       shouldSetBadge: true,
//     }),
//   });

//   const responseListener =
//       Notifications.addNotificationResponseReceivedListener(
//         handleNotificationResponse
//       );

//     return () => {
//       if (responseListener)
//         Notifications.removeNotificationSubscription(responseListener);
//     };
// },[])













  return (
    <MainScreen/>
  )
}  