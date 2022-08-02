import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS, width} from '../constants/theme';
import WelcomeImage from '../assets/images/welcome.png';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Image source={WelcomeImage} />
        <Text style={styles.title}>Find Your Roomie</Text>
        <Text style={styles.desc}>
          We've helped millions across the nation find their perfect match...
          and you're next!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Tabs');
          }}>
          <Text style={styles.buttonText}>Let's go</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.accentGreen,
  },
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.GORDITA_BOLD,
    paddingTop: 40,
    color: COLORS.black,
  },
  desc: {
    fontSize: 16,
    fontFamily: FONTS.GORDITA_REGULAR,
    paddingTop: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.black,
    width: width - 20,
    paddingVertical: 12,
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: FONTS.GORDITA_MEDIUM,
    textAlign: 'center',
    fontSize: 23,
  },
});

export default WelcomeScreen;
