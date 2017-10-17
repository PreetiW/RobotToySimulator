
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import { placeRobot, reportRobot, moveByOne, leftDirection, rightDirection } from '../actions';
import InputDialog  from './InputDialog';
import _ from 'lodash';

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

    let robotInformation = (xCoordinate >= 0 && yCoordinate >=0 && !_.isEmpty(facing)) ?
     <Text> currently at {xCoordinate},{yCoordinate} facing {facing} direction ;)</Text> : 
     <Text> place me in your favorite (5x5) place and start moving me around, otherwise I'll be roaming in this universe forever :(</Text>;


    return (
      <View style={styles.container}>
          <Image
            source={require('../img/android-female.jpg')}
            style={{width: 150, height: 150}}/>

          <Text style={styles.welcome}>
            Welcome! I am PreetiBot! 
            {robotInformation}
          </Text>

          <InputDialog onPlaceRobot = {this.props.onPlaceRobot}/>

          {
            (xCoordinate >= 0 && yCoordinate >=0 && !_.isEmpty(facing)) ?
            <View>  
              <TouchableOpacity onPress={this.props.onMove}>
                <Text style={styles.textButtons}>MOVE</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.props.onLeftDirection}>
                <Text style={styles.textButtons}>TURN LEFT</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.props.onRightDirection}>
                <Text style={styles.textButtons}>TURN RIGHT</Text>
              </TouchableOpacity>
            </View> : null
          }
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
    backgroundColor: '#FFFFFF',
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
    marginVertical: 8, 
    padding: 8
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