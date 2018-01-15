import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Profile extends React.Component {
    static navigationOptions = {
        title: 'profile'
    };

    onToHome = () => {
        const { navigate } = this.props.navigation;
        navigate('Other', { name: 'Other' })
    }
    render() {
        return <View>
            <Text>
                Profile
            </Text>
            <Button title={'To Other'}
                onPress={this.onToHome}>
            </Button>
        </View>
    }
}