
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
import { placeRobot, reportRobot, moveByOne, leftDirection, rightDirection } from '../actions';
import InputDialog  from './InputDialog';

class RobotToy extends Component {

  constructor(props){
    super(props);

    this.state = {
      xCoordinate: -1,
      yCoordinate: -1,
      facing: ''
    }

    this.handleOnPress = this.handleOnPress.bind(this);
  }

  componentWillMount(){
    let { xCoordinate, yCoordinate, facing } = this.props.robotDetails;
    this.setState({ 
      xCoordinate: xCoordinate,
      yCoordinate: yCoordinate,
      facing: facing
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    let { xCoordinate, yCoordinate, facing } = nextProps.robotDetails;
    this.setState({ 
      xCoordinate: xCoordinate,
      yCoordinate: yCoordinate,
      facing: facing
    })
  }

  render() {
    let { xCoordinate, yCoordinate, facing } = this.state;

    return (
      <View style={styles.container}>
          <InputDialog/>
          <Text style={styles.welcome}>
            Welcome I am Android Robot! currently at {xCoordinate},{yCoordinate} facing {facing} direction ;)
          </Text>

          <View>  
            <TouchableOpacity onPress={this.props.onMove}>
              <Text>Move</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onLeftDirection}>
              <Text>Go Left</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.onRightDirection}>
              <Text>Go Right</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }

  handleOnPress(){
    console.log("Got Pressed");
    let payload = {
      xCoordinate: 0,
      yCoordinate: 4,
      facing: 'north'
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
    robotDetails: state.Commands
  }
}

const mapDispatchToProps = (dispatch) => ({
  onPlaceRobot: (payload) => { dispatch(placeRobot(payload)) },
  onReportRobot: () => { dispatch(reportRobot())},
  onLeftDirection: () => { dispatch(leftDirection()) },
  onRightDirection: () => { dispatch(rightDirection()) },
  onMove: () => { dispatch(moveByOne())}
})

export default connect(mapStateToProps, mapDispatchToProps)(RobotToy);