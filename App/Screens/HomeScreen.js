import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import { Images } from '../Themes'

export default class HomeScreen extends React.Component {

  state = {
    bookmarked: [{title:'Blue Lane Farms', image:Images.bookmark1},
                 {title:'January Farms', image:Images.bookmark2},
                 {title:'Aussie Farms', image:Images.bookmark3}],
    categories: [{title:'Fruit', image:Images.fruit}, 
                 {title:'Vegetables', image:Images.vegetables}, 
                 {title:'Grains', image:Images.grains}],
    deals: [{title:'WHITE TRUFFLES', 
             description: '$4/lb',
             image:Images.truffles}, 
            {title:'PARMESAN',
            description: '$3.30/lb',
            image:Images.parmesan}, 
            {title:'JUMBO SHISHITOS', 
            description: '$4/lb',
            image:Images.shishito}],
  }
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return { 
      headerTitle: (
        <View style={styles.header}>
          <Entypo name="menu" color="black" size={Metrics.icons.small}
          onPress={() => navigation.openDrawer()}/>
          <View style={{flexDirection:'row',
                        alignItems: 'center'}}>
            <Entypo style={{marginRight:5}} name="location-pin" color="black"/>
            <Text>Palo Alto, CA</Text>
            <Entypo style={{marginLeft:5}} name="chevron-down" color="black"/>
          </View>
          
          <Entypo name="magnifying-glass" color="black" size={Metrics.icons.small}
          onPress={() => navigation.navigate('IngredientSearch')}/>
        </View>


      ),
      headerBackTitle: null,
      headerStyle: {
        borderBottomWidth: 0,
      }
    };
  };

  renderBookmark = (index, item) => {
    return (
      <TouchableOpacity onPress={() => {console.log('Opening bookmark');}}>
        <View style={styles.category_panel}>
          <Image source={item.image}
                  style={{height:140,
                          width:140,
                          resizeMode:'stretch'
                  }}
            />
          <Text style={{fontSize: 15, fontFamily: 'Avenir'}}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderCategory= (index, item) => {
    return (
      <TouchableOpacity onPress={() => {console.log('Opening category');}}>
        <View style={styles.category_panel}>
          <Image source={item.image}
                 style={{height:140,
                         width:140,
                         resizeMode:'stretch'
                }}
          />
          <Text style={{fontSize: 16, fontFamily: 'Avenir'}}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderDeal= (index, item) => {
    return (
      <TouchableOpacity onPress={() => {console.log('Opening deal');}}>
        <View style={styles.deal_panel}>
          <ImageBackground source={item.image}
                 style={{height:180,
                         width:140,
                         resizeMode:'stretch',
                         borderRadius: 10,
                         borderBottomLeftRadius: 10,
                         overflow:"hidden",
                         flex: 1,
                         flexDirection: 'column',
                         alignItems: 'center'
                }}
          >
            <Text style={{fontSize: 12, 
                          marginTop: 130,
                          fontFamily: 'Avenir',
                          fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={{fontSize: 10, 
                          // marginTop: 140,
                          fontFamily: 'Avenir'}}>{item.description}</Text>
          </ImageBackground>
          
        </View>
      </TouchableOpacity>
    )
  }

  keyExtractor = index => {
    return this.state.categories[index].title;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.bookmarked}>
          <Text style={styles.section_title}>Your Bookmarked Suppliers</Text>
          <FlatList
            data={this.state.bookmarked}
            // We encapsulated the code for renderItem into renderTodo.
            renderItem={({ index, item }) => this.renderBookmark(index, item)}
            keyExtractor={(item, index) => this.keyExtractor(index)}
            horizontal={true}
          />
        </View>
        <View style={styles.category}>
          <Text style={styles.section_title}>Browse by Category</Text>
          <FlatList
            data={this.state.categories}
            // We encapsulated the code for renderItem into renderTodo.
            renderItem={({ index, item }) => this.renderCategory(index, item)}
            keyExtractor={(item, index) => this.keyExtractor(index)}
            horizontal={true}
          />

        </View>
        <View style={styles.deals}>
          <Text style={styles.section_title}>Daily Deals</Text>
          <FlatList
            data={this.state.deals}
            // We encapsulated the code for renderItem into renderTodo.
            renderItem={({ index, item }) => this.renderDeal(index, item)}
            keyExtractor={(item, index) => this.keyExtractor(index)}
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
    // justifyContent: 'space-evenly'
    marginLeft: 15,
    marginRight:15,
    marginBottom:20,
    marginTop:20,
  },
  bookmarked: {
    marginLeft: 5,
    flex: 1,
  },
  category: {
    marginLeft: 5,
    flex: 1,
  },
  deals: {
    marginLeft: 5,
    flex: 1,
  },
  section_title: {
    fontFamily: 'Avenir',
    fontSize: 20,
    marginBottom: 10
  },
  category_panel: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // alignContent: 'stretch',
    alignItems: 'center',
    marginRight:5,
    width: 150
  },
  deal_panel: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // alignContent: 'stretch',
    alignItems: 'center',
    alignContent: 'center',
    marginRight:5,
    width: 150
  },
  header: {
    flex : 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20,
  }
});
