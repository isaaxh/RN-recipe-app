import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import FavoriteSection from '../components/FavoriteSection';
import RandomSection from '../components/RandomSection';
import COLORS from '../constants/colors';
import {Meal} from '../api/mealDB';
import SearchResults from '../components/SearchResults';

const HomeScreen = () => {
  const [searchResult, setSearchResult] = React.useState<Meal | null>(null);
  return (
    <View className="flex-1 bg-red-200" style={styles.container}>
      <Header setSearchResults={setSearchResult} />
      <FavoriteSection />
      {searchResult ? <SearchResults meal={searchResult} /> : <RandomSection />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
  },
});

export default HomeScreen;
