import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Platform,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS, FONTS} from '../constants/theme';
import {ONBORDING_DATA} from '../data/onboarding-data';

const Onboarding = ({onDoneHandler}) => {
  const {width} = Dimensions.get('window');
  const buttonLabel = label => {
    const isNextLabelButton = label === 'Next';
    return (
      <View
        style={[
          {
            backgroundColor: isNextLabelButton ? COLORS.black : 'transparent',
          },
          styles.buttonLabel,
        ]}>
        <Text
          style={[
            {
              color: isNextLabelButton ? COLORS.white : COLORS.black,
            },
            styles.buttonLabelText,
          ]}>
          {label}
        </Text>
      </View>
    );
  };

  const doneButtonLabel = label => {
    return (
      <View style={styles.doneButton}>
        <Text style={styles.doneButtonText}>{label}</Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    if (item.id === 'slide-1') {
      return (
        <SafeAreaView
          style={[{backgroundColor: item.backgroundColor, flex: 1}]}>
          <View style={styles.container}>
            <Image source={item.image} style={{marginTop: 0}} />
            <Text style={[styles.title, {textAlign: 'center'}]}>
              {item.title}
            </Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView
          style={[{backgroundColor: item.backgroundColor, flex: 1}]}>
          <View style={styles.container}>
            <Text style={[styles.title, {fontSize: 22}]}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
            <Image source={item.image} style={{marginTop: 30}} />
          </View>
        </SafeAreaView>
      );
    }
  };

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontFamily: FONTS.GORDITA_MEDIUM,
      paddingTop: 30,
      paddingBottom: 20,
      color: COLORS.black,
    },
    desc: {
      textAlign: 'center',
      lineHeight: 24,
      fontFamily: FONTS.GORDITA_REGULAR,
      fontSize: 16,
      color: COLORS.black,
    },
    doneButton: {
      borderWidth: 1,
      borderRadius: 8,
      bottom: 20,
      backgroundColor: COLORS.black,
      textAlign: 'center',
      width: width - 30,
      height: 60,
      justifyContent: 'center',
    },
    doneButtonText: {
      fontSize: 18,
      fontFamily: FONTS.GORDITA_MEDIUM,
      color: COLORS.white,
      textAlign: 'center',
    },
    buttonLabel: {
      borderWidth: 1,
      paddingHorizontal: 40,
      borderRadius: 8,
      bottom: 20,
      height: 60,
      justifyContent: 'center',
    },
    buttonLabelText: {
      fontSize: 18,
      fontFamily: FONTS.GORDITA_MEDIUM,
    },
    dotStyle: {bottom: 65, zIndex: 1, backgroundColor: COLORS.grey},
    activeDotStyle: {
      backgroundColor: COLORS.darkOrange,
      width: 20,
      bottom: 65,
      zIndex: 1,
    },
  });

  return (
    <AppIntroSlider
      data={ONBORDING_DATA}
      renderItem={renderItem}
      activeDotStyle={styles.activeDotStyle}
      dotStyle={styles.dotStyle}
      showSkipButton={true}
      renderNextButton={() => buttonLabel('Next')}
      renderSkipButton={() => buttonLabel('Skip')}
      renderDoneButton={() => doneButtonLabel('Done')}
      onDone={onDoneHandler}
      onSkip={onDoneHandler}
    />
  );
};

export default Onboarding;
