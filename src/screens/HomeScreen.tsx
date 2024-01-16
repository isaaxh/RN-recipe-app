import {View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import FavoriteSection from '../components/FavoriteSection';
import RandomSection from '../components/RandomSection';

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-red-200">
      <Header />
      <FavoriteSection />
      <RandomSection />
    </View>
  );
};

export default HomeScreen;
