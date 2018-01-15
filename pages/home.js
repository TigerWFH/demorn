import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'home'
    };

    onToProfile = () => {
        const { navigate } = this.props.navigation;
        navigate('Profile', { name: 'Profile' })
    }

    render() {

        return <View>
            <Button title={'To Profile'}
                onPress={this.onToProfile}>
            </Button>
        </View>
    }
}