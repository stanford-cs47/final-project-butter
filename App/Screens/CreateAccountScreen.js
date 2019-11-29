import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationActions } from 'react-navigation';
import ButterText from '../Components/ButterText'
import { TextInput } from 'react-native-gesture-handler';
import Highlighter from 'react-native-highlight-words';

export default class CreateAccountScreen extends React.Component {

   state = {
      buttonColor: 'white'
   }

   static navigationOptions = ({ navigation }) => {
      const params = navigation.state.params || {};

      return { 
         headerTintColor: 'grey',
         headerStyle: {
               borderBottomWidth: 0,
               marginLeft: 10,
         }
      };
   };

   render() {

      let type = this.props.navigation.getParam('type');
      return (
         <SafeAreaView style={styles.container}>
            <Text style={{fontFamily: 'Avenir',
                        fontSize: 20}}>Let's create your {type} account!</Text>
            <View style={styles.form}>
                  <TextInput style={styles.formField} placeholder="First name"></TextInput>
                  <TextInput style={styles.formField} placeholder="Last name"></TextInput>
                  <TextInput style={styles.formField} placeholder="Email address"></TextInput>
                  <TextInput style={styles.formField} secureTextEntry={true} placeholder="Password"></TextInput>
                  <TextInput style={styles.formField} secureTextEntry={true} placeholder="Confirm password"></TextInput>
            </View>
            <View style={styles.confirm}>
                  <TouchableOpacity style={[styles.optionButton, {backgroundColor: this.state.buttonColor}]} onPress={() => {this.setState({buttonColor:'#FFB100'})}}/>
                  <Highlighter
                     style={{fontFamily:'Avenir',
                              fontSize: 14,
                              fontWeight: 'bold',
                           }}
                     highlightStyle={{fontFamily:'Avenir',
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    color: '#ff8d00'}}
                     searchWords={['privacy policy', 'terms and conditions']}
                     textToHighlight="I agree with the privacy policy and terms and conditions."
                  />
            </View>
            <TouchableOpacity style={styles.getStarted} onPress={() => this.props.navigation.navigate(type)}>
                  <Text style={{
                     color: 'white',
                     fontFamily: 'Avenir',
                     fontWeight: 'bold',
                     fontSize: 15,
                  }}>Get Started</Text>
            </TouchableOpacity>
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: "flex-start",
      marginLeft: 40,
      marginRight: 40
   },
   form: {
         marginTop: 40,
         marginBottom: 40,
         width: '95%'
   },
   formField: {
         borderBottomWidth: 1,
         borderColor: 'gray',
      //   width: '90%',
         height: 40,
         marginBottom: 20
   },
   confirm: {
         flexDirection: 'row',
         justifyContent: 'flex-start',
         marginBottom: 40,
         marginRight: 40,
   },
   optionButton: {
         borderColor: 'gray',
         borderWidth: 1,
         height: 22,
         width:22,
         borderRadius: 11,
         marginLeft: 15,
         marginRight: 15
   },
   getStarted: {
         width: 330,
         height: 51,
         backgroundColor: '#FFB100',
         borderRadius: 20,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center'
   }
});
