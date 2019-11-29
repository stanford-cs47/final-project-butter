import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationActions } from 'react-navigation';

export default class LandingScreen extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <Text style={{
            fontFamily:'Avenir',
            fontSize:25,
            fontWeight: 'bold'
          }}>Butter: High-Fi Prototype</Text>
          <Text style={{
            fontFamily:'Avenir',
            fontSize:20,
            marginLeft: 40,
            marginRight: 40
            // fontWeight: 'bold'
          }}>Select the user whose experience you would like to demo.</Text>
          <View style={styles.options}>
            <TouchableOpacity style={styles.contact_button} onPress={() => this.props.navigation.navigate("Buyer")}>
              <Text style={{color:'white',
                            fontFamily:'Avenir',
                            fontSize:17,
                            fontWeight: 'bold'}}>Buyer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contact_button} onPress={() => alert('Supplier!')}>
              <Text style={{color:'white',
                            fontFamily:'Avenir',
                            fontSize:17,
                            fontWeight: 'bold'}}>Supplier</Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "space-around"
  },
  contact_button: {
    backgroundColor: 'orange',
    borderRadius: 10,
    height:40,
    width: 120,
    // marginRight: 25,
    // marginLeft: 30,
    marginBottom: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  options: {
    
  }
});
