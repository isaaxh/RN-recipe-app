import {StyleSheet, TextInput, TextStyle, View} from 'react-native';
import React from 'react';
import COLORS from '../../../constants/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

type CustomInputProps = {
  placeholder: string;
  text: string;
  setText: (newLabel: string) => void;
  style?: TextStyle;
  handleSubmit?: () => void;
};

const CustomInput = ({
  placeholder,
  text,
  style,
  setText,
  handleSubmit,
}: CustomInputProps) => {
  const icon = (
    <FontAwesome6 name={'magnifying-glass'} color={COLORS.placeholder} />
  );
  return (
    <View
      style={[styles.text, style]}
      className="flex-row items-center pl-2 pr-1 rounded mt-4 border border-gray-200">
      {icon}
      <TextInput
        style={[styles.text, style]}
        className="flex-1 ml-1 border-hidden p-1"
        placeholder={placeholder}
        placeholderTextColor={COLORS.placeholder}
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
    backgroundColor: COLORS.secondary,
  },
});
export default CustomInput;
