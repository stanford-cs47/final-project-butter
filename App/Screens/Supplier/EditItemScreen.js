import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../../Themes';
import { Entypo } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import { Images } from '../../Themes'
import { TextInput } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class EditItemScreen extends React.Component {

   constructor(props) {
      super(props);
      if (props.navigation.state.params.mode == 'edit') {
         let item = props.navigation.state.params.item;
         this.state = {
            name: item.name,
            price: item.price,
            quantity: item.quantity
         };
      } else {
         this.state = {
            name: '',
            price: '',
            quantity: ''
         }
      }
   }

   updateParam = (param, val) => {
      this.props.navigation.state.params[param] = val;
      
      if (param=='name') {
         this.setState({name:val});
      } else if (param=='price') {
         this.setState({price:val});
      } else if (param=='quantity') {
         this.setState({quantity:val});
      }
   }
   
   static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};

      addItemAndReturn = () => {
         let newItem = {
            name: params.name,
            price: params.price,
            quantity: params.quantity
         }
         
         navigation.goBack();

         if (params.mode == "edit") {
            params.addItem(params.index, newItem);
         } else {
            params.addItem(newItem);
         }
      }

      if (params['mode'] == 'new') {
         var titleMode = 'New';
      } else {
         var titleMode = 'Edit';
      }
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
               <Text style={{fontFamily:'Avenir',
                              fontSize: 20,
                              fontWeight: 'bold',
                              }}>{titleMode} Item</Text>
               
         </View>
         ),
         headerRight: (
         <TouchableOpacity style={{marginRight: 20}} onPress={addItemAndReturn}>
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
            <TouchableOpacity style={{
               borderWidth:1,
               borderColor: '#707070',
               borderRadius: 82,
               width: 165,
               height: 165,
               marginBottom: 24,
               justifyContent: 'center',
               alignItems: 'center'
            }} onPress={() => {this.props.navigation.navigate('Camera')}}
            >
               <Image source={Images.camera} style={{resizeMode:'contain',
                                                     height: 81,
                                                     width: 81}}
                                             />
            </TouchableOpacity >
            <View style={{
               borderWidth:1,
               borderColor: '#707070',
               borderRadius: 30,
               width: '90%',
               height: 50,
               marginBottom: 24,
            }}>
               <TextInput style={{paddingTop:15, paddingLeft:10}} placeholder="Name" value={this.state.name} onChangeText={text => this.updateParam('name', text)}></TextInput>
            </View>
            <View style={{
               borderWidth:1,
               borderColor: '#707070',
               borderRadius: 30,
               width: '90%',
               height: 50,
               marginBottom: 24,
            }}>
               <TextInput style={{paddingTop:15, paddingLeft:10}} placeholder="Category" onChangeText={text => this.updateParam('category', text)}></TextInput>
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
               }} placeholder="Price (/lb)" value={this.state.price} onChangeText={text => this.updateParam('price', text)}></TextInput>
               <TextInput style={{
                  paddingLeft:10,
                  borderWidth:1,
                  borderColor: '#707070',
                  borderRadius: 30,
                  width: '45%',
               }} placeholder="Quantity (lb)" value={this.state.quantity} onChangeText={text => this.updateParam('quantity', text)}></TextInput>
            </View>
            <View style={{
               borderWidth:1,
               borderColor: '#707070',
               borderRadius: 20,
               width: '90%',
               height: 324,
            }}>
               <TextInput style={{paddingTop:10, paddingLeft:10}} placeholder="Description" onChangeText={text => this.updateParam('description', text)}></TextInput>
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

export default withNavigation(EditItemScreen);