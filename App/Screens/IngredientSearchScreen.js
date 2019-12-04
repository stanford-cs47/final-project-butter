import React from 'react';
import { StyleSheet, Modal, Text, View, FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'
import Search from '../Components/Search'
import { AntDesign } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import Highlighter from 'react-native-highlight-words';
import {AsyncStorage} from 'react-native';


class SearchHeader extends React.Component {

    state = {
        searchText: '',
    }

    render() {
      return (
        <Search searchText = {this.state.searchText}
          searchForArticles = {this.props.navigation.getParam('searchForIngredient')}/>
      );
    }
}

export default class IngredientSearchScreen extends React.Component {

    // state = {
    //     default:true,
    //     apples:[
    //         {title:'Turkish Honeycrisp Apples', description:'$10/lb | Blue Lane Farms'},
    //         {title:'Gala Valley Honeycrisp Apples', description:"$8/lb | Kauffmann's Fruit Farm"},
    //         {title:"Honeycrisp Apples: Hidden Valley's Best", description:'$14/lb | Mendocino Farms'},
    //         {title:'Hybrid Granny Smith-Honeycrisp Apples', description:'$12/lb | Happy Farms'},
    //         {title:'Organic Honeycrisp Apples', description:'$18/lb | Apple Farms'},
    //         {title:'Fresh Picked Honeycrisp Apples', description:'$10/lb | Aggy Farms'},
    //         {title:'Jumbo Honeycrisp Apples', description:'$12/lb | Redhearts Farms'},
    //     ],
    //     recentSearches:[
    //         {title:'honey'},
    //         {title:'hass avocados'},
    //         {title:'milk'},
    //         {title:'broccoli'},
    //         {title:'romaine lettuce'},
    //         {title:'bell peppers'},
    //     ]
    // }

    state = {
      default: true,
      apples: [],
      recentSearches: [],
      modalVisible: false
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    componentDidMount = () => {
      AsyncStorage.getItem('apples').then((value) => this.setState({ 'apples': JSON.parse(value) }))
      AsyncStorage.getItem('recentSearches').then((value) => this.setState({ 'recentSearches': JSON.parse(value) }))
      this.props.navigation.setParams({
        searchForIngredient: this.searchForIngredient 
      });
    }

    keyExtractor = (item, index) => {
        // return this.state.apples[index].title;
        return item.title;
    }

    goToIngredient = (ingredient) => {
        console.log('Going to ingredient with name ' + ingredient.title);
        this.props.navigation.navigate('IngredientSearchResult', {ingredient:ingredient});
    }

    searchForIngredient = (searchTerm) => {
        console.log('Searching for '+searchTerm);
        this.setState({default:false});
    } 

    renderSearchResult = (index, item) => {
        return (
          <TouchableOpacity style={styles.searchResult} onPress={() => this.goToIngredient(item)}>

            <Highlighter
                style={{fontFamily:'Avenir',
                        fontWeight:'bold',
                        fontSize: 15,
                        marginBottom: 3}}
                highlightStyle={{fontFamily:'Avenir',
                                fontWeight:'bold',
                                fontSize: 15,
                                marginBottom: 3,
                                color: '#ff8d00'}}
                searchWords={['Honeycrisp', 'Apples']}
                textToHighlight={item.title}
            />
            <Text style={{fontFamily:'Avenir',
                          fontSize: 14,
                          color: '#656565'}}>{item.description}</Text>
          </TouchableOpacity>
        )
    }

    renderRecentSearch = (index, item) => {
        return (
          <TouchableOpacity style={styles.recentSearchResult} onPress={console.log("Clicked recent search")}>
            <Text style={{fontFamily:'Avenir',
                          fontWeight:'bold',
                          fontSize: 15,
                          marginBottom: 3}}>{item.title}</Text>
          </TouchableOpacity>
        )
    }

    static navigationOptions = ({ navigation }) => {
        const {params = {}} = navigation.state;

        return { 
            headerTitle: () => <SearchHeader navigation={navigation}/>,
            headerTintColor: 'grey',
            headerBackTitle: null,
            headerStyle: {
                marginLeft: 10,
                borderBottomWidth: 0,
            },
        };  
    };

  render() {

    let contentDisplayed = null;

    let filterModal = 
      (<View
        style = {{
            height: 60%
        }}
        >
        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                  <Text style={{fontFamily:'Avenir',
                            color:'gray'}}>Filter   +</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
            <View style = {{marginTop: 50,
                           marginLeft: 50
                          }}>
              <TouchableOpacity onPress={() => this.setModalVisible(false)}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
        </Modal>
      </View>);
    
    if (this.state.default) {
      return (
      <SafeAreaView style={styles.container}>
          <View style={styles.filterBar}>
              <View style={{flexDirection:'row',}}>
                <Text style={{fontFamily:'Avenir', 
                              fontWeight:'bold',
                              marginRight:8,}}>Ingredients</Text>

              </View>
          </View>
              <View>
                  <Text style={{fontFamily:'Avenir',
                            color:'gray',
                            fontSize: 15,
                            paddingTop:10,
                            marginLeft: 20,
                            }}>Recent Searches</Text>
              </View>
              <FlatList
                style={{marginTop:10,
                        height:'100%'}}
                data={this.state.recentSearches}
                // We encapsulated the code for renderItem into renderTodo.
                renderItem={({ index, item }) => this.renderRecentSearch(index, item)}
                keyExtractor={(item, index) => this.keyExtractor(item, index)}
              />

        </SafeAreaView>
        );
    } else {
      return (
      <SafeAreaView style={styles.container}>
          <View style={styles.filterBar}>
              <View style={{flexDirection:'row',}}>
                <Text style={{fontFamily:'Avenir', 
                              fontWeight:'bold',
                              marginRight:8,}}>Ingredients</Text>
              </View>
              {filterModal}
                 
          </View>
          <FlatList
              style={{marginTop:10}}
              data={this.state.apples}
              // We encapsulated the code for renderItem into renderTodo.
              renderItem={({ index, item }) => this.renderSearchResult(index, item)}
              keyExtractor={(item, index) => this.keyExtractor(item, index)}
          />          
        </SafeAreaView>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchResult: {
    paddingTop: 32,
    paddingBottom: 32,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderColor: '#e7e7d1',
  },
  recentSearchResult: {
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderColor: '#e7e7d1',
  },
  filterBar: {
    //   flex:1,
      flexDirection:'row',
      justifyContent: 'space-between',
      height: 55,
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight:20,
      borderBottomWidth: 6,
      borderBottomColor: '#f2f2f2',
    //   paddingBottom: 10,
  },
  // modal: {
  //   height: 60%,
  // },
});
