import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux';

class Home extends React.Component {

  increment() {
      const action = { type: "UP", value: this.props.count }
      this.props.dispatch(action)
  }

  decrement() {
      const action = { type: "DOWN", value: this.props.count }
      this.props.dispatch(action)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}/>
        <View style={{alignSelf: 'center'}}><Text>MOBILE {this.props.count}</Text></View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.decrement()}>
            <Text style={{fontSize: hp('20%')}}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.increment()}>
            <Text style={{fontSize: hp('20%')}}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Result', {count: this.props.count})} style={{alignSelf: 'center'}}><Text>Go to the result page</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    backgroundColor:'blue',
    width: wp('100%'),
    height: hp('50%')
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

export default connect(mapStateToProps)(Home)
