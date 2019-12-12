import * as React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'
import SafeAreaView from 'react-native-safe-area-view';
import { Images } from '../Themes'
import { TextInput } from 'react-native-gesture-handler';

export default class SupplierProfileScreen extends React.Component {
  state = {
      categories: [{title:'Gala Apples', image:Images.apples}, 
              {title:'Senegal Mangos', image:Images.mangos}, 
              {title:'Raspberries', image:Images.raspberries}],
    };

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        marginLeft: 10,
        borderBottomWidth: 0,
      },
      headerTintColor: 'grey',
    }
  };


  renderCategory= (item) => {
    return (
      <TouchableOpacity onPress={() => {console.log('Do nothing');}}>
        <View style={styles.category_panel}>
          <Image source={item.image}
                 style={{height:140,
                         width:140,
                         borderRadius: 27,
                         resizeMode:'stretch',
                         borderColor: "#707070",
                         borderWidth: 0.5
                }}
          />
          <Text style={{fontSize: 16, 
                        fontFamily: 'Avenir',
                        alignItems: 'center',
                        textAlign: 'center'
                      }}>
          {item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  keyExtractor = (item) => {
    return item.title;
  }

  render() {
    let supplier = this.props.navigation.getParam('item');

    if (supplier.title == "Blue Lane Farms") {
      var farm = "Blue Lane Farms";
      var imageSource = Images.bluelaneFarms;
      var bio = "Located in the heart of Watsonville, we have been the East Bay’s go-to supplier for fresh fruit for over 50 years.";
      var address = "305 Mayfield Ave, Watsonville CA 94102";
      var numReviews = 139
    } else if (supplier.title == "January Farms") {
      var farm = "January Farms";
      var imageSource = Images.januaryFarms;
      var bio = "We are a young farming family, currently producing on 20 acres of certified organic land in Hollister, California. We use sustainable, organic practices to grow a little bit of everything that does well in our local climate.";
      var address = "833 Los Viboras Road Hollister, CA 95023";
      var numReviews = 87
    } 


    return (
      <SafeAreaView style={styles.container}>
          <View style = {{ flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center', 
                                marginLeft: 40,
                                marginRight: 40
                                }}>
                <Image source={imageSource}
                  style={styles.profileImg}
                />                
                <Text style={{fontFamily:'Avenir',
                                fontSize: 22,
                                fontWeight: 'normal',
                                color: 'black',
                                marginTop: 20,
                                marginBottom: 6,
                                fontWeight: 'bold'
                                }}>{farm}</Text>
                <Text style={{fontFamily:'Avenir',
                            fontSize: 14,
                            color: '#656565',
                            fontWeight: 'normal',
                            textAlign:'center'
                            }}>{numReviews} Reviews</Text> 
                <Text style={{fontFamily:'Avenir',
                            fontSize: 16,
                            color: 'black',
                            fontWeight: 'normal',
                            textAlign:'center',
                            marginTop: 10
                            }}>{bio}</Text>

                <View style={{flexDirection:'row',
                              alignItems: 'center',
                              marginTop: 10
                            }}>
                    <Entypo style={{marginRight:5}} name="location-pin" color="black"/>
                    <Text style={{fontFamily:'Avenir',
                            fontSize: 16,
                            color: 'black',
                            fontWeight: 'bold',
                            textAlign:'center'
                            }}>{address}</Text>
                </View>                
            </View>

            <View
              style={{
                marginTop: 20,
                borderBottomColor: '#707070',
                borderBottomWidth: 0.5,
              }}
            />

            <View style={styles.category_panel}>
              <Text style={styles.section_title}>Popular Inventory</Text>
              <FlatList
                data={this.state.categories}
                renderItem={({item}) => this.renderCategory(item)}
                keyExtractor={(item) => this.keyExtractor(item)}
                horizontal={true}
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
    justifyContent: "flex-start",
    // marginLeft: 40,
    // marginRight: 40,
    marginBottom: 20,
  },
  profileImg: {
    height: 230,
    width: 230,
    borderRadius: 115,
    marginTop:20,
  },
   category_panel: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // marginRight:5,
    marginLeft: 20,
    marginRight: 20
   },
  section_title: {
    textAlign: 'left',
    fontFamily: 'Avenir',
    fontSize: 20,
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold'
  },

});
