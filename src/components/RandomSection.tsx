import {View} from 'react-native';
import React from 'react';
import TextNormal from './sharedUi/texts/TextNormal';
import {fetchRandomMeals} from '../api/mealDB';
import {useQuery} from 'react-query';
import MealCard from './MealCard';

const RandomSection = () => {
  const {data, isLoading} = useQuery({
    queryFn: fetchRandomMeals,
    queryKey: ['randomMeal'],
  });

  if (isLoading) {
    return <TextNormal>Loading...</TextNormal>;
  }

  return (
    <View className="bg-red-50">
      <TextNormal>Random Meal</TextNormal>
      {data && <MealCard meal={data.meals[0]} />}
    </View>
  );
};

export default RandomSection;
