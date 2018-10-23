import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, StyleSheet, View, Dimensions} from 'react-native';

import Color from './Color';

const {width, height} = Dimensions.get("window")
const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[  styles.container,
                      props.round && {borderRadius: 17},
                      props.border && styles.borderButton,
                      props.containerStyle] }>
        <Text style={[  styles.text,
                        props.border && { color: Color.textDark },
                        props.textStyle] }>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    borderRadius: 5,
    backgroundColor: Color.primary,
  },
  borderButton: {
    borderWidth: 2,
    borderColor: Color.primary,
    backgroundColor: "#fff",
  },
  icon: {
    marginHorizontal: 10
  },
  text: {
    fontSize: 16,
    color: Color.textLight
  }
});

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: PropTypes.any,
  textStyle: PropTypes.any,
  containerColor: PropTypes.any,
  textColor: PropTypes.any,
};
Button.defaultProps = {
  text: 'BUTTON',
  onPress: () => 'Button pressed!',
  containerStyle: {},
  textStyle: {},
  containerColor: Color.primary,
  textColor: 'white',
};

export default Button;
