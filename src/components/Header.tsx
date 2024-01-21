import {View} from 'react-native';
import React from 'react';
import CustomInput from './sharedUi/inputs/CustomInput';
import COLORS from '../constants/colors';
import TextPara from './sharedUi/texts/TextPara';
import SearchButton from './SearchButton';
import globalStyles from '../styles/globalStyles';
import {useQuery} from 'react-query';
import {Meal, fetchMealByName} from '../api/mealDB';
import TextNormal from './sharedUi/texts/TextNormal';

type HeaderProps = {
  setSearchResults: React.Dispatch<React.SetStateAction<Meal | null>>;
};

const Header = ({setSearchResults}: HeaderProps) => {
  const [search, setSearch] = React.useState('');
  const [showSearchBar, setShowSearchBar] = React.useState(false);

  const {
    data: meal,
    refetch,
    isLoading,
  } = useQuery({
    queryFn: () => fetchMealByName(search),
    queryKey: ['meal'],
    enabled: false,
  });

  const toggleShowSearch = () => {
    setSearchResults(null);
    setShowSearchBar(prev => !prev);
  };

  const handleSubmit = () => {
    if (search === '') {
      return;
    }
    refetch();
    setSearch('');
    setSearchResults(meal ? meal?.meals[0] : null);
  };

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
      {isLoading && <TextNormal>Loading...</TextNormal>}
    </View>
  );
};

export default Header;
