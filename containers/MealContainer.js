import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, List } from 'react-native'



// const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class MealContainer extends React.Component {

    // state = {
    //   dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    // }

    render() {
        return (
            <FlatList 
                data={this.props.data}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id}
          />
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    },
  });