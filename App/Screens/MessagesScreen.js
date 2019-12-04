import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'
import SafeAreaView from 'react-native-safe-area-view';
import { withNavigation } from 'react-navigation';

class MessagesScreen extends React.Component {

   state = {
      chats: [
      {'name':'Roxanne Marks', 'org':'Blue Lane Farms', 'caption':'Hi Jane! Your order that we spoke about a few days ago is ready…', 'color':'#D4F2D5', 'status':'unread'},
      {'name':'Geronimo Knowles', 'org':'Happy Farms', 'caption':'You: Sounds good! See you then.', 'color':'#D4E1F2', 'status':'read'},
      {'name':'Tyler Barns', 'org':"Redhearts Farms", 'caption':'Unfortunately I won’t have any more butter lettuce until…', 'color':'#DCD4F2', 'status':'read'},
      {'name':'Kaitlyn Cornell', 'org':"Kaufmann's Fruit Farm", 'caption':'Sure! My email is k.cornell@kaufmannsfruits.com…', 'color':'#D4F2D5', 'status':'read'},
      {'name':'Matt Wylie', 'org':"Wylie's Produce", 'caption':'Hi! I noticed you’re in the area and might be interested in some…', 'color':'#D4E1F2', 'status':'unread'},
      {'name':'Jennifer Cowman', 'org':'Frischy Farms', 'caption':'You: Thank you so much!!!', 'color':'#D4F2D5', 'status':'read'},
      ]
   }

   componentDidMount() {
      console.log("Mounted")
   }

   renderItem= (index, item) => {

      if (item.status == 'unread') {
      var symbolIfUnread = <View style={{backgroundColor: '#FFB100',
                                          height: 10,
                                          width: 10,
                                          borderRadius: 5}}></View>
      var name = <Text style={{fontFamily:'Avenir',
                                 fontWeight:'bold',
                                 fontSize: 17,
                                 }}>{item.name}</Text>
      var org = <Text style={{fontFamily:'Avenir',
                              fontSize: 14,
                              fontWeight: 'bold',
                              color: 'black',
                              marginBottom: 3}}>{item.org}</Text>
      } else {
      var symbolIfUnread = <View></View>
      var name = <Text style={{fontFamily:'Avenir',
                                 fontSize: 17}}>{item.name}</Text>
      var org = <Text style={{fontFamily:'Avenir',
                              fontSize: 14,
                              color: 'black',
                              marginBottom: 3}}>{item.org}</Text>
      }

      updateCaption = (newCaption, name) => {
         let newChats = [...this.state.chats];
         let index = newChats.findIndex((elem) => elem.name == name);
         newChats[index]['caption'] = newCaption;
         this.setState({chats:newChats});
      }

      goToChat = () => {
         // let currentChatState = this.state.chats[index];
         // currentChatState['status'] = 'read';
         // console.log(currentChatState)
         // let chats = this.state.chats;
         // chats[index] = currentChatState;
         // this.setState({'chats':chats});
         // console.log(this.state);

         let newChats = [...this.state.chats];
         newChats[index]['status'] = 'read';
         this.setState({chats:newChats});
         this.props.navigation.navigate('SingleChat', {'name':item.name, 'org':item.org, updateCaption:updateCaption});
      }


      return (
         <TouchableOpacity style={styles.chat} onPress={goToChat}>
            <View style={{height: 75,
                        width: 75,
                        borderRadius: 10,
                        backgroundColor:item.color}}></View>
            <View style={styles.itemPanel}>
            {name}
            {org}
            <Text style={{fontFamily:'Avenir',
                           fontSize: 14,
                           color: '#656565',
                           flex: 1,
                           flexWrap: 'wrap'}}>{item.caption}</Text>

            </View>
            { symbolIfUnread }
         </TouchableOpacity>
      )
   }

   keyExtractor = index => {
      return this.state.chats[index].name;
   }

   static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};

      return {
      headerTitle: (
         <View style={styles.header}>

            <Text style={{fontFamily: 'Avenir',
                        fontSize: 23,
                        marginLeft: 5}}>Messages</Text>


            <TouchableOpacity style={styles.newMessage} onPress={() => navigation.navigate('NewMessage')}>
                  <Text style={{
                     color: 'white',
                     fontFamily: 'Avenir',
                     fontWeight: 'bold'
                  }}>+</Text>
            </TouchableOpacity>
         </View>


      ),
      headerBackTitle: null,
      headerStyle: {
         marginTop: 10,
         borderBottomWidth: 0,
      }
      };
   };


   render() {
      return (
      <SafeAreaView style={styles.container}>
         <FlatList
            data={this.state.chats}
            // We encapsulated the code for renderItem into renderTodo.
            renderItem={({ index, item }) => this.renderItem(index, item)}
            keyExtractor={(item, index) => this.keyExtractor(index)}
         />
      </SafeAreaView>
      );
   }
   }

   const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      // justifyContent: 'space-evenly'
      marginLeft: 30,
      marginRight:30,
      marginBottom:20,
      marginTop:20,
   },
   header: {
      flex : 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 30,
      marginLeft: 30,
   },
   newMessage: {
      width: 35,
      height: 26,
      backgroundColor: '#FFB100',
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
   },
   chat: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 14,
      paddingBottom: 14,
      paddingRight: 14
   },
   itemPanel: {
      marginLeft: 15,
      marginRight: 20,
      width: 230,

   },
});

export default withNavigation(MessagesScreen);
