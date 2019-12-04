import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { NutritionLabel }from 'react-fda-nutrition-facts'
import { scanFood }from '../../actions'

import {connect} from 'react-redux'

class BarcodeScanner extends React.Component {
  
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

    handleBarCodeScanned = ({ type, data }) => {
      console.log(data)
      this.setState({ scanned: true });
      if (type === "org.iso.QRCode"){
       return alert('Sorry but our app cannot handle QR codes at this time!')
      } 
      
      console.log(type,  data)
    
      // fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${data}`)
      // .then(response => response.json())
      // .then(data => console.log(data["items"]))
  
      fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${data}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          // 'Authorization': 'Token token=02013c85e4cde2bcc3c8277ec106d095'
        
        },
        
      }) 
      .then(response => response.json())
      .then(response=> this.props.scanFood(response["items"][0]))
      .then(this.props.navigation.navigate('Create Food'))
    };

    scanAgain = () => {
      let blankScan = {}
      this.props.scanFood(blankScan)
      this.setState({ scanned: false })
    }


  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <TouchableOpacity style={styles.button }onPress={this.scanAgain}>
             <Text style={styles.text}>Tap to Scan Again!</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

}//end of class

export default connect(null, {scanFood})(BarcodeScanner)

const styles = StyleSheet.create({
  button: {
    padding:10,
    backgroundColor: '#202646',
    borderRadius:5,
    marginBottom: 10,
    textAlign: 'center',
    // width: 150,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize:20,
	color: 'yellow',
	textAlign: 'center'
  },
})