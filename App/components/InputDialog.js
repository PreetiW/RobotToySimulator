import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Picker, TextInput } from 'react-native';

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

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Fill Details</Text>
            <TextInput
              placeholder="Enter X coordinate for Robot"
              maxLength={1}
              autoFocus={true}
              keyboardType='numeric'
              style={{height: 40, marginTop: 16}}
              onChangeText={(text) => this.setState({xInput: text})}
              value={this.state.xInput}/>

            <TextInput
              placeholder="Enter Y coordinate for Robot"
              maxLength={1}
              keyboardType='numeric'
              style={{height: 40}}
              onChangeText={(text) => this.setState({yInput: text})}
              value={this.state.yInput}/>

            <Picker
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label="North" value="north" />
              <Picker.Item label="South" value="south" />
              <Picker.Item label="East" value="east" />
              <Picker.Item label="West" value="west" />
            </Picker>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Done!</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Cancel</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Place Robot</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default InputDialog