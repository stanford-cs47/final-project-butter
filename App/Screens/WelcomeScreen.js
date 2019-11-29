import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'
import ButterText from '../Components/ButterText'
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationActions } from 'react-navigation';
import { Images } from '../Themes'
import Highlighter from 'react-native-highlight-words';

export default class WelcomeScreen extends React.Component {

   static navigationOptions = {
      header: null,
      headerBackTitle: null,
   };

   // static navigationOptions = ({ navigation }) => {
   //    // const params = navigation.state.params || {};

   //    // return { 
   //    //    headerBackTitle: null,
   //    //    headerStyle: {
   //    //       borderBottomWidth: 0,
   //    //    }
   //    // };
   //    header: null,
   // };

   render() {
      return (
         <SafeAreaView style={styles.container}>
            <Image source={Images.welcome}
                  style={{height:340,
                          width:375,
                          resizeMode: 'stretch',
                          marginBottom: 30
                  }}
            />
            <View > 
               <Text style={{fontFamily: 'Avenir', 
                             fontWeight: 'bold',
                              fontSize: 20,
                              textAlign: 'left',
                              marginBottom: 15}}>Welcome to Butter</Text>
            </View>
            <View style={{marginBottom: 24}}>
               <Text style={{fontFamily: 'Avenir',
                             fontSize: 15,
                             marginBottom: 15}}>Butter makes ordering and communication between restaurants and suppliers faster and simpler.</Text>
               <Text style={{fontFamily: 'Avenir',
                             fontSize: 15}}>To get started, please select the role that fits you best: </Text>
            </View>
            <View style={styles.option} >
            {/* onPress={() => this.props.navigation.navigate('CreateAccount')} */}
               <TouchableHighlight style={styles.optionButton} underlayColor={'#FFB100'} onPress={() => this.props.navigation.navigate('CreateAccount', {type:'Buyer'})}>
                        <View></View>
               </TouchableHighlight>

               <View>
                        <ButterText>Buyer</ButterText>
                        <Text style={{fontFamily: 'Avenir',
                                                fontSize: 12,}}>I am a chef or purchaser of ingredients.</Text>
               </View>
            </View>
            <View style={styles.option} onPress={() => this.props.navigation.navigate('CreateAccount')}>
               <TouchableHighlight style={styles.optionButton} underlayColor={'#FFB100'} onPress={() => this.props.navigation.navigate('CreateAccount', {type:'Supplier'})}>
                        <View></View>
               </TouchableHighlight>
               <View>
                  <ButterText>Supplier</ButterText>
                  <Text style={{fontFamily: 'Avenir',
                                          fontSize: 12,}}>I am a farmer or seller of ingredients.</Text>
               </View>
            </View>
            <View style={{alignItems: 'center'}}>
               <Highlighter
                  style={{fontFamily:'Avenir',
                           fontSize: 14}}
                  highlightStyle={{fontFamily:'Avenir',
                                 fontSize: 14,
                                 color: '#ff8d00'}}
                  searchWords={['Sign in']}
                  textToHighlight="Already have an account with us? Sign in."
               />
            </View>
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
   //  alignItems: 'center',
    justifyContent: "flex-start",
    marginLeft: 40,
    marginRight: 40
  },
  option: {
      height: 83,
      width: 305,
      borderWidth: 1,
      borderRadius: 14,
      borderColor: 'gray',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: 26
  },
  optionButton: {
    //   backgroundColor: '#FFB100',
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: 1,
      height: 22,
      width:22,
      borderRadius: 11,
      marginLeft: 15,
      marginRight: 15
  }
});
