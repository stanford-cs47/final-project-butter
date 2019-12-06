import React from 'react';
import { StyleSheet, Text, Button, View, FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'
import Search from '../Components/Search'
import { AntDesign } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import Highlighter from 'react-native-highlight-words';
import {AsyncStorage} from 'react-native';
import { Overlay } from 'react-native-elements';

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


    state = {
      default: true,
      apples: [],
      recentSearches: [],
      overlayVisible: false,
      isSortedByPrice: false,
      isSortedByDistance: false,
      isSortedByRecommended: true
    }

    sortByPrice(clicked) {
      this.setState({isSortedByPrice: clicked});
      if (clicked) {
        AsyncStorage.getItem('price').then((value) => this.setState({ 'apples': JSON.parse(value)}))
        this.setState({isSortedByRecommended: false});
        this.setState({isSortedByDistance: false});
      }
    }

    sortByDistance(clicked) {
      this.setState({isSortedByDistance: clicked});
      if (clicked) {
        AsyncStorage.getItem('distance').then((value) => this.setState({ 'apples': JSON.parse(value)}))
        this.setState({isSortedByRecommended: false});
        this.setState({isSortedByPrice: false});
      }
    }

    sortByRecommended(clicked) {
      this.setState({isSortedByRecommended: clicked});
      if (clicked) {
        AsyncStorage.getItem('recommended').then((value) => this.setState({ 'apples': JSON.parse(value)}))
        this.setState({isSortedByDistance: false});
        this.setState({isSortedByPrice: false});
      }
    }


    setOverlayVisible(visible) {
      this.setState({overlayVisible: visible});
    }

    componentDidMount = () => {
      AsyncStorage.getItem('recommended').then((value) => this.setState({apples: JSON.parse(value)}))
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

    let overlayContent = 
    <View>
      <Text style={{fontFamily:'Avenir',
            color:'black',
            fontSize: 25,
            marginTop: 10,
            textAlign: 'center'
          }}>What's most important to you?</Text>
      <View style={styles.fixToText}>
        <TouchableOpacity 
        style=
        {[this.state.isSortedByPrice ? 
            styles.getStarted 
            : styles.buttonStyleUnclicked]}
        onPress={() => this.sortByPrice(!this.state.isSortedByPrice)}>
          <Text 
          style=
           {[this.state.isSortedByPrice ? 
            styles.buttonClickedText 
            : styles.buttonUnclickedText]}
          >Price</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style=
        {[this.state.isSortedByDistance ? 
            styles.getStarted 
            : styles.buttonStyleUnclicked]}
        onPress={() => this.sortByDistance(!this.state.isSortedByDistance)}>
          <Text
          style=
           {[this.state.isSortedByDistance ? 
            styles.buttonClickedText 
            : styles.buttonUnclickedText]}
            >Distance</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style=
        {[this.state.isSortedByRecommended ? 
            styles.getStarted 
            : styles.buttonStyleUnclicked]}
        onPress={() => this.sortByRecommended(!this.state.isSortedByRecommended)}>
          <Text 
          style=
           {[this.state.isSortedByRecommended ? 
            styles.buttonClickedText 
            : styles.buttonUnclickedText]}
            >Recommended</Text>
        </TouchableOpacity>
      </View>

    </View>

    let filterOverlay= 
      (<View>
        <TouchableOpacity onPress={() => this.setOverlayVisible(true)}>
                  <Text style={{fontFamily:'Avenir',
                            color:'gray'}}>Sort By</Text>
        </TouchableOpacity>
        <Overlay
            isVisible={this.state.overlayVisible}
            height="20%"
            width="100%"
            animationType="slide"
            windowBackgroundColor="rgba(0,0,0,0.5)"
            onBackdropPress={() => this.setOverlayVisible(false)}
        >
        <View>
          <TouchableOpacity onPress={() => this.setOverlayVisible(false)}>
            <Text style = {{marginLeft: 5, fontSize: 20}}>x</Text>
          </TouchableOpacity>
          {overlayContent}
        </View>
        </Overlay>
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
              {filterOverlay}
                 
          </View>
          <FlatList
              style={{marginTop:10}}
              data={this.state.apples}
              extraData={this.state}
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
      flexDirection:'row',
      justifyContent: 'space-between',
      height: 55,
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight:20,
      borderBottomWidth: 6,
      borderBottomColor: '#f2f2f2',
  },
  fixToText: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  getStarted: {
       width: "auto",
       height: "auto",
       backgroundColor: '#FFB100',
       borderRadius: 20,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       padding: 10
   },
   buttonClickedText: {
     color: 'white',
     fontFamily: 'Avenir',
     fontWeight: 'bold',
     fontSize: 15,
   },
   buttonUnclickedText: {
     color: '#959595',
     fontFamily: 'Avenir',
     fontWeight: 'bold',
     fontSize: 15,
   }
});
