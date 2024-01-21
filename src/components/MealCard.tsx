import {View} from 'react-native';
import React from 'react';
import {Meal} from '../screens/HomeScreen';
import TextNormal from './sharedUi/texts/TextNormal';

type MealCardProps = {
  meal: Meal;
};

const MealCard = ({meal}: MealCardProps) => {
  return (
    <View>
      <TextNormal>MealCard</TextNormal>
      <TextNormal>{JSON.stringify(meal.strMeal)}</TextNormal>
    </View>
  );
};

export default MealCard;
