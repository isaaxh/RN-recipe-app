import {TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import COLORS from '../constants/colors';

type searchButtonProps = {
  toggleShowSearch: () => void;
};

const SearchButton = ({toggleShowSearch}: searchButtonProps) => {
  const searchIcon = (
    <FontAwesome6 name={'magnifying-glass'} color={COLORS.placeholder} />
  );
  return (
    <TouchableOpacity
      onPress={toggleShowSearch}
      className="p-3 rounded border border-gray-200"
      style={{backgroundColor: COLORS.secondary}}>
      {searchIcon}
    </TouchableOpacity>
  );
};

export default SearchButton;
