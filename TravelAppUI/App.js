import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FONTS} from './src/constants/theme';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 20}}>
        <Text style={{fontFamily: FONTS.GORDITA_BOLD}}>
          Welcome to my Application
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
