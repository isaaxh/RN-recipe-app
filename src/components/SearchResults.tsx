import {View} from 'react-native';
import React from 'react';
import TextNormal from './sharedUi/texts/TextNormal';
import {Meal} from '../api/mealDB';

type SearchResultsProps = {
  meal: Meal;
};

const SearchResults = ({meal}: SearchResultsProps) => {
  return (
    <View>
      <TextNormal>"SearchResults:"</TextNormal>
      <TextNormal>{meal?.strMeal}</TextNormal>
    </View>
  );
};

export default SearchResults;
