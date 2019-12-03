import * as React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image} from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'
import SafeAreaView from 'react-native-safe-area-view';
import { Images } from '../Themes'
import { TextInput } from 'react-native-gesture-handler';

export default class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    state = {
      text: 'hello'
    };

    return { 
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={material.body2}>Unsplash</Text>
          <Text style={[material.caption, {fontSize: 10}]}>Popular</Text>
        </View>
      )
    };
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <View style = {{ flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center', 
                                }}>
                <Text style={{fontFamily:'Avenir',
                                fontSize: 22,
                                fontWeight: 'bold',
                                color: 'black',
                                marginTop: 20,
                                marginBottom: 6,
                                }}>My Profile</Text>
                <Text style={{fontFamily:'Avenir',
                            fontSize: 18,
                            color: '#707070',
                            fontWeight: 'normal',
                            textAlign:'center'
                            }}>Your name and avatar will be visible to suppliers you have contacted.</Text>
                <Image source={Images.birddog}
                  style={styles.profileImg}
                  />
            </View>
            <View style={styles.form}>
                  <Text style = {styles.labels}>Name</Text>
                  <TextInput style={styles.formField}>Bird Dog Palo Alto</TextInput>
                  <Text style = {styles.labels}>Location</Text>
                  <TextInput style={styles.formField}>420 Ramona St, Palo Alto, CA</TextInput>
                  <Text style = {styles.labels}>E-mail</Text>
                  <TextInput style={styles.formField}>sourcing@birddog.com</TextInput>
                  <Text style = {styles.labels}>Phone</Text>
                  <TextInput style={styles.formField}>650-123-4567</TextInput>
                  <Text style = {styles.labels}>Password</Text>
                  <TextInput style={styles.formField} secureTextEntry={true}>password</TextInput>
                  <Text style = {styles.labels}>Search Radius</Text>
                  <TextInput style={styles.formField}>10 miles</TextInput>
            </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "flex-start",
    marginLeft: 40,
    marginRight: 40,
  },
  profileImg: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginTop:20,
  },
  form: {
    marginTop: 20,
    marginBottom: 40,
    width: '95%'
   },
  formField: {
    borderTopWidth: 1,
    borderColor: '#d3d3d3',
    width: 320,
    height: 40,
    marginBottom: 20
   },
   labels: {
    fontSize: 15,
    fontFamily: "Avenir",
    fontWeight: "bold"
   }

});
