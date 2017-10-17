import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Picker, TextInput, StyleSheet } from 'react-native';

class InputDialog extends Component {

  state = {
    modalVisible: false,
    facingDirection: 'north',
    xInput: '',
    yInput: ''
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  placeRobot(visible){
   let { xInput, yInput, facingDirection } = this.state;
    let payload = {
      xCoordinate: xInput,
      yCoordinate: yInput,
      facing: facingDirection
    };
    this.props.onPlaceRobot(payload);
    this.setState({modalVisible: visible, xInput:'', yInput:''});
  }

  render() {
    return (
      <View style={{marginTop: 24}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
          >
         <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>PLACE ME!</Text>
            <TextInput
              placeholder="Enter X coordinate for Robot"
              maxLength={1}
              autoFocus={true}
              keyboardType='numeric'
              style={{height: 40, marginTop: 16}}
              onChangeText={(text) => this.setState({xInput: +text})}
              value={this.state.xInput}/>

            <TextInput
              placeholder="Enter Y coordinate for Robot"
              maxLength={1}
              keyboardType='numeric'
              style={{height: 40}}
              onChangeText={(text) => this.setState({yInput: +text})}
              value={this.state.yInput}/>

            <Text style={{marginTop: 56}}>Which side shoud I face?</Text>
            <Picker
              selectedValue={this.state.facingDirection}
              onValueChange={(itemValue, itemIndex) => this.setState({facingDirection: itemValue})}>
              <Picker.Item label="North" value="north" />
              <Picker.Item label="South" value="south" />
              <Picker.Item label="East" value="east" />
              <Picker.Item label="West" value="west" />
            </Picker>

            <View style={styles.buttonsContainer}>
              <View style={styles.button}>
                <TouchableOpacity onPress={() => {
                  this.placeRobot(!this.state.modalVisible)}}>
                  <Text style={styles.textButtons}>Done!</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                  <Text style={styles.textButtons}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
         </View>
        </Modal>

        <TouchableOpacity onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text style={styles.textButtons}>PLACE ME</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F5FCFF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 56
  },
  button: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textButtons: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 8
  }
});

export default InputDialog