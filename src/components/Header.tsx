import {View} from 'react-native';
import React from 'react';
import CustomInput from './sharedUi/inputs/CustomInput';
import COLORS from '../constants/colors';
import TextPara from './sharedUi/texts/TextPara';
import SearchButton from './SearchButton';
import globalStyles from '../styles/globalStyles';

const Header = () => {
  const [search, setSearch] = React.useState('');
  const [showSearchBar, setShowSearchBar] = React.useState(false);

  const toggleShowSearch = () => {
    setShowSearchBar(prev => !prev);
  };

  const handleSubmit = () => {};
  return (
    <View
      style={[{backgroundColor: COLORS.primary}, globalStyles.shadow]}
      className="bg-red-300 p-5 shadow-2xl">
      <View className="flex-row justify-between">
        <View>
          <TextPara>allrecipes</TextPara>
        </View>
        <SearchButton toggleShowSearch={toggleShowSearch} />
      </View>
      {showSearchBar && (
        <CustomInput
          placeholder="Search"
          text={search}
          setText={setSearch}
          handleSubmit={handleSubmit}
        />
      )}
    </View>
  );
};

export default Header;
