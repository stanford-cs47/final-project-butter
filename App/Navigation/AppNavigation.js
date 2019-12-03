import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';

import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import WelcomeScreen from '../Screens/WelcomeScreen'
import CreateAccountScreen from '../Screens/CreateAccountScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import BuyerHomeScreen from '../Screens/Buyer/BuyerHomeScreen'
import SupplierHomeScreen from '../Screens/Supplier/SupplierHomeScreen'
import EditItemScreen from '../Screens/Supplier/EditItemScreen'
import CameraScreen from '../Screens/Supplier/CameraScreen'
import MessagesScreen from '../Screens/MessagesScreen'
import SingleChatScreen from '../Screens/SingleChatScreen'
import NewMessageScreen from '../Screens/NewMessageScreen'
import IngredientSearchScreen from '../Screens/IngredientSearchScreen'
import IngredientSearchResultScreen from '../Screens/IngredientSearchResultScreen'

/* PART 1: Create a StackNavigator that contains the HomeScreen, and the UserProfileScreen */
/* initialRouteName should be your HomeScreen. Set headerMode to 'float'  */

BuyerStackNav = createStackNavigator({
  Home: { screen: BuyerHomeScreen },
  IngredientSearch: { screen: IngredientSearchScreen },
  IngredientSearchResult: { screen: IngredientSearchResultScreen}
}, {
  initialRouteName: 'Home'
})

SupplierStackNav = createStackNavigator({
  Home: { screen: SupplierHomeScreen },
  EditItem: { screen: EditItemScreen },
  Camera: { screen: CameraScreen }
  }, {
	initialRouteName: 'Home'
  })

MessagesStackNav = createStackNavigator({
  Messages: { screen: MessagesScreen },
  SingleChat: { screen: SingleChatScreen },
  NewMessage: { screen: NewMessageScreen }
  }, {
	initialRouteName: 'Messages'
  })

SupplierStackNav.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

BuyerStackNav.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

MessagesStackNav.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
/* PART 2: Create a StackNavigator that contains the BookmarkScreen, and the BookmarkViewerScreen */
/* initialRouteName should be your BookmarkScreen. Set headerMode to 'float'  */

/* PART 3: nest both StackNavigators in the TabNavigator below */
/* Your FeedScreen should point to the StackNavigator that you created in Part 1 */
/* Your BookmarkScreen should point to the StackNavigator that you created in Part 2 */

/* OPTIONAL: Add icons for both tabs using navigationOptions as shown in lecture

BookmarkNav.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Bookmarks',
    tabBarIcon: ({ tintColor }) => (
      <Entypo name="bookmark"
        size={Metrics.icons.medium}
        color={tintColor} />
    ),
  };
};

*/

// MessagesScreen.navigationOptions = ({ navigation }) => {
//   return {
//     tabBarLabel: 'Bookmarks',
//     tabBarIcon: ({ tintColor }) => (
//       <Entypo name="bookmark"
//         size={Metrics.icons.medium}
//         color={tintColor} />
//     ),
//   };
// };

// HomeScreen.navigationOptions = ({ navigation }) => {
//   return {
//     tabBarLabel: 'Home',
//     tabBarIcon: ({ tintColor }) => (
//       <Entypo name="home"
//         size={Metrics.icons.medium}
//         color={tintColor} />
//     ),
//   };
// };

// Manifest of possible screens
// const TabNav = createBottomTabNavigator({
//   FeedScreen: { screen: HomeScreen },
//   BookmarkScreen:   { screen: BookmarkScreen },
// }, {
//   // Default config for all screens
//   initialRouteName: 'FeedScreen',
//   tabBarOptions: {
//     activeTintColor: Colors.black,
//     showLabel: true,
//   },
// })

const SupplierNav = createBottomTabNavigator({
	Messages: { screen: MessagesStackNav,
              navigationOptions: {
                tabBarLabel: 'MESSAGES',
                tabBarIcon: ({ tintColor }) => (
                  <Entypo name="message" size={20} color={tintColor}/>
                )
              }},
  Home: { screen: SupplierStackNav,
          navigationOptions: {
            tabBarLabel: 'HOME',
            tabBarIcon: ({ tintColor }) => (
              <Entypo name="home" size={20} color={tintColor}/>
            )
          }},
	Profile: { screen: ProfileScreen,
             navigationOptions: {
              tabBarLabel: 'PROFILE',
              tabBarIcon: ({ tintColor }) => (
                <Entypo name="user" size={20} color={tintColor}/>
              )
            }}, 
  }, {
	initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white',
      paddingTop: 5,
    }
  },
  })

const BuyerNav = createBottomTabNavigator({
	Messages: { screen: MessagesStackNav,
              navigationOptions: {
                tabBarLabel: 'MESSAGES',
                tabBarIcon: ({ tintColor }) => (
                  <Entypo name="message" size={20} color={tintColor}/>
                )
              }},
  Home: { screen: BuyerStackNav,
          navigationOptions: {
            tabBarLabel: 'HOME',
            tabBarIcon: ({ tintColor }) => (
              <Entypo name="home" size={20} color={tintColor}/>
            )
          }},
	Profile: { screen: ProfileScreen,
             navigationOptions: {
              tabBarLabel: 'PROFILE',
              tabBarIcon: ({ tintColor }) => (
                <Entypo name="user" size={20} color={tintColor}/>
              )
            }}, 
  }, {
	initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white',
      paddingTop: 5,
    }
  },
})


// const BuyerNav = createBottomTabNavigator({
// 	Messages: { screen: MessagesScreen},
// 	Home: { screen: BuyerStackNav },
// 	Profile: { screen: ProfileScreen }
// }, {
//   initialRouteName: 'Home',

// })

const SignupNav = createStackNavigator({
	Welcome: { screen: WelcomeScreen },
	CreateAccount: { screen: CreateAccountScreen },
}, {
	initialRouteName: 'Welcome'
})

const AppNav = createSwitchNavigator({
  Signup: { screen: SignupNav },
  Buyer: { screen: BuyerNav },
  Supplier: { screen: SupplierNav }
}, {
  initialRouteName: 'Signup'
})

const AppContainer = createAppContainer(AppNav);

export default AppContainer
