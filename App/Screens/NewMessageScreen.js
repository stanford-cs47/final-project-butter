import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import { Images } from '../Themes'
import { TextInput } from 'react-native-gesture-handler';

export default class NewMessageScreen extends React.Component {

   
   static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};

      return {
         headerLeft: (
         <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.goBack()}>
            <Text style={{fontFamily:'Avenir',
                           fontSize: 18,
                           color: '#FFB100',
            }}>Cancel</Text>
         </TouchableOpacity>
         ),
         headerTitle: (
         <View style={styles.header}>
               {/* <TouchableOpacity style={{width: 35,
                                          height: 26,
                                          backgroundColor: 'white',
                                          borderRadius: 10,
                                          flexDirection: 'row',
                                          justifyContent: 'center',
                                          alignItems: 'center'}}>
                     <Text style={{
                           color: 'white',
                           fontFamily: 'Avenir',
                           fontWeight: 'bold'
                     }}>+</Text>
               </TouchableOpacity>
                */}
               <Text style={{fontFamily:'Avenir',
                              fontSize: 20,
                              fontWeight: 'bold',
                              }}>New Message</Text>
               
         </View>
         ),
         headerBackTitle: null,
         headerStyle: {
         borderBottomWidth: 0,
         tabBarVisible: false,
         }
      };
   };

   render() {
      return (
         <SafeAreaView style={styles.container}>
            <View style={{
               backgroundColor: '#f2f2f2',
               width: '90%',
               height: 38,
               marginBottom: 24,
            }}>
               <TextInput style={{paddingTop:10, paddingLeft:10}} placeholder="To:"></TextInput>
            </View>
            
            <View style={{
               borderWidth:1,
               borderColor: '#707070',
               borderRadius: 30,
               width: '90%',
               height: 50,
               marginBottom: 24,
            }}>
               <TextInput style={{paddingTop:15, paddingLeft:15}} placeholder="Type your message here..."></TextInput>
            </View>
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight:15,
    marginBottom:20,
    marginTop:20,
  },
  header: {
    flex : 1, 
    flexDirection: 'row', 
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
});
