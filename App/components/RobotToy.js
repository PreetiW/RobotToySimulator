
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { placeRobot } from '../actions';

class RobotToy extends Component {

  constructor(props){
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  componentWillMount(){
    console.log("I am ready");
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleOnPress}>
          <Text style={styles.welcome}>
            Welcome!
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  handleOnPress(){
    console.log("Got Pressed");
    let payload = {
       XCoordinate: -1,
        YCoordinate: -1,
        Facing: ''
    };
    this.props.onPlaceRobot(payload);

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

const mapStateToProps = state => {
  return {
    commands: state.Commands
  }
}

const mapDispatchToProps = (dispatch) => ({
  onPlaceRobot: (payload) => {
   console.log("Preeti");
   dispatch(placeRobot(payload)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(RobotToy);