import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Images } from '../../Themes';
import SafeAreaView from 'react-native-safe-area-view';

export default class CameraScreen extends React.Component {
    
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
  
        return { 
            headerStyle: {
                marginLeft: 10,
                borderBottomWidth: 0,
            },
            headerTintColor: 'grey',
        };
     };

    render() {

        return (
            <View>
                <Image source={Images.camroll} style={{resizeMode:'cover',
                                                     height: '100%',
                                                     width: '100%'}}/>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    
});