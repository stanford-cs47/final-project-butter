import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../../Themes';
import { Entypo } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import { Images } from '../../Themes'
import { TextInput } from 'react-native-gesture-handler';

export default class EditItemScreen extends React.Component {

  state = {
    inventory: [
       {item: 'Turkish Honeycrisp Apples', details: '112 lbs | $12/lb'},
       {item: 'Juicy Red Strawberries', details: '1144 lbs | $11/lb'},
       {item: 'Taylor Gold Pear', details: '65 lbs | $13/lb'},
       {item: 'Romaine Lettuce', details: '440 lbs | $16/lb'},
       {item: 'Corn', details: '4140 lbs | $11/lb'},
       {item: 'Cherry Tomatoes', details: '40 lbs | $12/lb'},
      ]
  }

   
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
                              }}>Edit Item</Text>
               
         </View>
         ),
         headerRight: (
         <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.goBack()}>
            <Text style={{fontFamily:'Avenir',
                           fontSize: 18,
                           color: '#FFB100',
            }}>Done</Text>
         </TouchableOpacity>
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
               borderWidth:1,
               borderColor: '#707070',
               borderRadius: 82,
               width: 165,
               height: 165,
               marginBottom: 24,
               justifyContent: 'center',
               alignItems: 'center'
            }}>
               <Image source={Images.camera} style={{resizeMode:'contain',
                                                     height: 81,
                                                     width: 81}}/>
            </View >
            <View style={{
               borderWidth:1,
               borderColor: '#707070',
               borderRadius: 30,
               width: '90%',
               height: 50,
               marginBottom: 24,
            }}>
               <TextInput style={{paddingTop:15, paddingLeft:10}} placeholder="Name"></TextInput>
            </View>
            <View style={{
               borderWidth:1,
               borderColor: '#707070',
               borderRadius: 30,
               width: '90%',
               height: 50,
               marginBottom: 24,
            }}>
               <TextInput style={{paddingTop:15, paddingLeft:10}} placeholder="Category"></TextInput>
            </View>
            <View style={{
               flexDirection: 'row',
               justifyContent: 'space-between',
               width: '90%',
               height: 50,
               marginBottom: 24,
            }}>
               <TextInput style={{
                  paddingLeft:10,
                  borderWidth:1,
                  borderColor: '#707070',
                  borderRadius: 30,
                  width: '45%',
               }} placeholder="Price"></TextInput>
               <TextInput style={{
                  paddingLeft:10,
                  borderWidth:1,
                  borderColor: '#707070',
                  borderRadius: 30,
                  width: '45%',
               }} placeholder="Quantity"></TextInput>
            </View>
            <View style={{
               borderWidth:1,
               borderColor: '#707070',
               borderRadius: 20,
               width: '90%',
               height: 324,
            }}>
               <TextInput style={{paddingTop:10, paddingLeft:10}} placeholder="Description"></TextInput>
            </View>
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
