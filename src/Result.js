import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux';

class Result extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'orange', width: wp('100%'), height: hp('50%')}}/>
        <Text style={{textAlign: 'center'}}>{"You've clicked "}{this.props.count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Result)
