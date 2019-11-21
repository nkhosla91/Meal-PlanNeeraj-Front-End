import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Icon, Button, Container, Header, Content, Left } from 'native-base'

export default class HomeScreen extends React.Component {
    render () {
        return (
          <Container>
              <Header>
                  <Left>
                      <Icon name='ios-menu' onPress={()=>
                      this.props.navigation.navigate('DrawerOpen')} />
                  </Left>
              </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                  <Text>HomeScreen</Text>
                </Content>
          </Container>
        )
    }
} //end of HomeScreen Class