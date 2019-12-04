import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'
import SafeAreaView from 'react-native-safe-area-view';
import { withNavigation } from 'react-navigation';
import { Images } from '../Themes'
import Highlighter from 'react-native-highlight-words';

class IngredientSearchResultScreen extends React.Component {

  // state = {
  //   ingredient:null
  // }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    // let ingredient = navigation.getParam('ingredient');
    // this.state.ingredient = ingredient;

    // console.log("SHOWING FOR"+ingredient.title);
    return { 
      headerTintColor: 'grey',
      headerTitle: null,
      headerRight: () => (
        <View style= {styles.contact_button}>
          <TouchableOpacity style={styles.contact_button} onPress={() => alert('Contacting them!')}>
            <Text style={{color:'white',
                          fontFamily:'Avenir',
                          fontSize:17,
                          fontWeight: 'bold',
                          paddingLeft:20}}>Contact</Text>
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        marginLeft: 10,
        borderBottomWidth: 0,
      }
    };
  };


  render() {

    let ingredient = this.props.navigation.getParam('ingredient');
    // let image = 

    if (ingredient.title == "Gala Valley Honeycrisp Apples") {
      var farm = "Kauffman's Fruit Farm";
      var imageSource = Images.apple;
      var bio = "Fresh new-crop honeycrisp apples from the Gala Valley! You’ll love the light, crunchy texture and sweet flavor of this variety. Honeycrisp is also a fine baking apple.";
      var seeMore = "See more from Kauffman's Fruit Farm.";
    } else if (ingredient.title == "Organic Honeycrisp Apples") {
      var farm = "Apple Farms";
      var imageSource = Images.apples;
      var bio = "As the name of the variety implies, this is one of the sweetest tasting apples in the marketplace today. The Honeycrisp™ tends to be quite large with light red striping over a gold background.";
      var seeMore = "See more from Apple Farms.";
    } else {
      var farm = "Hybrid Granny Smith-Honeycrisp Apples";
      var imageSource = Images.granny_smith;
      var bio = "The Apple of the Future in our opinion; Honeycrisp is an “explosively crisp” apple, one that people say, “WOW” over!";
      var seeMore = "See more from Happy Farms.";
    }

    return (
      <SafeAreaView style={styles.container}>
          {/* <View> */}
            <Image source={imageSource}
                    style={{height:150,
                            width:150,
                            resizeMode:'stretch'
                  }}
                />
            <Text style={{fontFamily:'Avenir',
                          textAlign:'center',
                          fontSize:20,
                          paddingTop: 20,
                          paddingBottom:10}}>{ingredient.title}</Text>
            <Text style={{fontFamily:'Avenir',
                          fontSize: 18,
                          paddingBottom: 5,
                          color: 'gray'}}>{ingredient.description}</Text>
          {/* </View> */}
          {/* <View> */}
            <Text style={{fontFamily:'Avenir',
                          fontSize: 18,
                          color: 'gray',
                          marginTop:50}}>{bio}</Text>

            <Highlighter
                style={{fontFamily:'Avenir',
                        fontSize: 18,
                        color: 'gray',
                        marginTop:30}}
                highlightStyle={{fontFamily:'Avenir',
                                fontSize: 18,
                                color: 'gray',
                                marginTop:30,
                                color: '#ff8d00'}}
                searchWords={["Kauffman's Fruit Farm", "Apple Farms", "Happy Farms"]}
                textToHighlight={seeMore}
            />
          {/* </View> */}
          
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 100,
  },
  contact_button: {
    flex:1,
    backgroundColor: 'orange',
    borderRadius: 10,
    height:30,
    marginRight: 25,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default withNavigation(IngredientSearchResultScreen);
