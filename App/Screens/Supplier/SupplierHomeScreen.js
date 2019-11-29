import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../../Themes';
import { Entypo } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import { Images } from '../../Themes'

export default class SupplierHomeScreen extends React.Component {

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
      headerTitle: (
        <View style={styles.header}>
            <TouchableOpacity style={{width: 35,
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
         
            <Text style={{fontFamily:'Avenir',
                          fontSize: 20,
                          fontWeight: 'bold',
                          }}>Inventory</Text>
          
          
          <TouchableOpacity style={styles.getStarted} onPress={() => navigation.navigate('EditItem')}>
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
        borderBottomWidth: 0,
      }
    };
  };
   
   renderItem= (index, item) => {
      return (
         <View style={styles.itemPanel}>
            <Text style={{fontFamily:'Avenir',
                        fontWeight:'bold',
                        fontSize: 15,
                        marginBottom: 3}}>{item.item}</Text>
            <Text style={{fontFamily:'Avenir',
                          fontSize: 14,
                          color: '#656565'}}>{item.details}</Text>
         </View>
      )
   }

   keyExtractor = index => {
      return this.state.inventory[index].item;
   }


    render() {
        return (
            <SafeAreaView style={styles.container}>
               <View style={styles.subheader}>
                  <View style={{alignItems: 'center'}}> 
                     <Text style={{fontFamily:'Avenir',
                        fontWeight:'bold',
                        fontSize: 20}}>$144,000</Text>
                     <Text style={{fontFamily:'Avenir',
                        fontSize: 12}}>Total Value</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                     <Text style={{fontFamily:'Avenir',
                        fontWeight:'bold',
                        fontSize: 20}}>20,000</Text>
                     <Text style={{fontFamily:'Avenir',
                        fontSize: 12}}>Items</Text>
                  </View>
               </View>
               <View style={styles.filterBar}>
                  <View style={{flexDirection:'row',}}>
                     <Text style={{fontFamily:'Avenir', 
                                    fontWeight:'bold',
                                    marginRight:8,}}>Items</Text>
                     <Text style={{fontFamily:'Avenir',
                                    color:'gray'}}>Categories</Text>
                  </View>
                  <Text style={{fontFamily:'Avenir',
                                 color:'gray'}}>Filter   +</Text>
               </View>
               <FlatList
                  data={this.state.inventory}
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
    marginLeft: 15,
    marginRight:15,
    marginBottom:20,
    marginTop:20,
  },
  header: {
    flex : 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20,
  },
  subheader: {
     flexDirection: 'row',
     justifyContent: 'space-evenly',
     alignItems: 'center',
     paddingTop: 10,
     paddingBottom: 30
  },
  getStarted: {
    width: 35,
    height: 26,
    backgroundColor: '#FFB100',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
   },
   filterBar: {
      flexDirection:'row',
      justifyContent: 'space-between',
      height: 55,
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight:20,
   },
   itemPanel: {
      paddingTop: 14,
      paddingBottom: 24,
      marginBottom: 12,
      marginLeft: 20,
      marginRight: 20,
      borderBottomWidth: 1,
      borderColor: '#e7e7d1',
   },
});
