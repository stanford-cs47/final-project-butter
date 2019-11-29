import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { GiftedChat, Send, InputToolbar, Bubble, Time } from 'react-native-gifted-chat'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo, Feather } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

class SingleChatScreen extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {

    // HARDCODED USERS
    var hardcodedMessages = {
        'Roxanne Marks':[
            {
                _id: 5,
                text: 'Hi Jane! Your order that we spoke about a few days ago is ready. I just wanted to confirm that today is a good day to drop it off still - let me know!',
                createdAt: '2015-03-24',
                user: {
                  _id: 2,
                },
            },
            {
                _id: 4,
                text: 'Yes, sounds great! Thanks :)',
                createdAt: '2015-03-25',
                user: {
                  _id: 1,
                },
            },
            {
                _id: 3,
                text: 'Sure thing! I can have it all delivered on Friday afternoon. Does that work for you?',
                createdAt: '2015-03-25',
                user: {
                  _id: 2,
                },
            },
            {
                _id: 2,
                text: 'Hey there! The customers have been loving the turkey bacon you sent over last week. Could I add it to this week’s order?',
                createdAt: '2015-03-25',
                user: {
                  _id: 1,
                },
            },
            {
                _id: 1,
                text: 'Awesome! The delivery should be arriving today - let me know if there are any issues!',
                createdAt: '2015-03-25',
                user: {
                  _id: 2,
                },
            },
            
        ],
    }

    if (hardcodedMessages[this.props.navigation.getParam('name')]) {
        this.setState({
            messages: hardcodedMessages[this.props.navigation.getParam('name')]
        });
    } else {
        this.setState({
            messages: [
              {
                _id: 1,
                text: 'Hey! Want to see my new ingredients?',
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'React Native',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
            ],
        });
    }
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return { 
        headerTitle: (
            <View style = {{ flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center', 
                                height: 55}}>
                <Text style={{fontFamily:'Avenir',
                                fontSize: 22,
                                fontWeight: 'bold',
                                color: '#FFB100',
                                marginTop: 14,
                                marginBottom: 6,
                                }}>{navigation.getParam('name')}</Text>
                <Text style={{fontFamily:'Avenir',
                            fontSize: 18,
                            color: 'gray',
                            fontWeight: 'normal'
                            }}>{navigation.getParam('org')}</Text>
            </View>
            ),
        headerBackTitle: null,
        headerTintColor: 'grey',
        headerStyle: {
            height: 60,
            marginTop: 10,
            marginLeft: 10,
            marginBottom: 20,
            borderBottomWidth: 0,
        }
    };
  };

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
        renderTime = {() => {
            return(null)
        }}
        renderAvatar= {(props) => {
            return <View/>;
        }}
        renderBubble={(props) => {
            return ( <Bubble {...props} 
                wrapperStyle={{
                    left: {
                        marginTop: 5,
                        marginBottom: 5,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingRight: 10,
                        paddingLeft: 10, 
                        borderRadius: 30,
                        backgroundColor: '#fff3d2',
                    },
                    right: {
                        marginTop: 5,
                        marginBottom: 5,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingRight: 10,
                        paddingLeft: 10, 
                        borderRadius: 30,
                        backgroundColor: '#dbdbdb'
                    }
                  }}
                textStyle={{
                    right: {
                        color: 'black'
                    }
                }} 
                  />

            )
        }}  
        renderSend={(props) => {
            return (
                <Send {...props}>
                    <View style={{
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  marginRight: 10, 
                                  marginBottom: 10, 
                                  height: 26, 
                                  width: 26,
                                  borderRadius: 13,
                                  backgroundColor: '#FFB100',
                                  }}>
                        <Feather name="arrow-up" style={{color: 'white'}}/>
                    </View>
                </Send>
            );
        }}
        renderChatFooter={() => {
            return (
                <View style={{height:30}} />
            );
        }}
        // inverted={false}
      />
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 15,
      marginRight:15,
      marginBottom:20,
      marginTop:20,
    },
    header: {
      flex : 1, 
      flexDirection: 'row', 
      justifyContent: 'center',
      marginRight: 20,
      marginLeft: 20,
    },
  });

  export default withNavigation(SingleChatScreen)