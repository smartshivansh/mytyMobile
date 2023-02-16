import { View, Text ,StyleSheet , Image} from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat ,   InputToolbar, Bubble , Send ,LeftAction, ChatInput, SendButton } from 'react-native-gifted-chat'
import Heder from '../../Componets/Heder';
import ws from '../../SocketConctions/Socketio';






export default function Chats() {

    const [messages, setMessages] = useState([]);



    

   
    const onSend = (message) => {
      const currentMessage = message[0];
      console.log({ currentMessage });
      let { text } = currentMessage;
  
      let updatedMessages = GiftedChat.append(messages, message);
      setMessages([...updatedMessages]);
       console.log("updated messages on send", updatedMessages);
  
      ws.send(text);


      
  
      async function receiver(data) {
         console.log("receiver", data);



const inmessage = {
  _id: Math.round(Math.random() * 1000000),
  text : data,
  createdAt: new Date(),
  
}

setMessages(previousMessages => GiftedChat.append(previousMessages, inmessage))
       
      }
      ws.receive(receiver);
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
<Heder/>
    </View>
      {/* messages={messages}
       onSend={messages => onSend(messages)}
      user={{
     _id: 1,
       }}

     */}




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
            _id: 0
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