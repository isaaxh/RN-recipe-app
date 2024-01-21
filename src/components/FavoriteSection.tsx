import {View} from 'react-native';
import React from 'react';
import TextNormal from './sharedUi/texts/TextNormal';
import COLORS from '../constants/colors';

const FavoriteSection = () => {
  return (
    <View style={{backgroundColor: COLORS.secondary}}>
      <TextNormal>FavoriteSection</TextNormal>
    </View>
  );
};

export default FavoriteSection;
