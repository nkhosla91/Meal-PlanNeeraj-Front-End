import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Icon, Button, Container, Header, Content, Left } from 'native-base'

export default class MyInfo extends React.Component {


    // handleDate = () => {
    //     const currentdate = new Date(); 
    //     const datetime = "Last Sync: " + currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/"  + currentdate.getFullYear()
    //     console.log(datetime)
    // }


    render () {
        return (
          <Container>
              <Header>
                  {/* <Left>
                      <Icon name='ios-menu' onPress={()=>
                      this.props.navigation.navigate('DrawerOpen')} />
                  </Left> */}
              </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                  <Text>MyInfo</Text>
                  {/* <Button
                        title="Log In"
                        onPress={this.handleDate}
                    /> */}
                </Content>
          </Container>
        )
    }
} //end of MyInfo Class