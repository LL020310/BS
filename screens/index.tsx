import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Index: undefined;
  LanguageSelection: undefined;
  Eng: undefined;
  BM: undefined;
  Chi: undefined;
  RatingPage: undefined;
};

type IndexScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Index'>;

type Props = {
  navigation: IndexScreenNavigationProp;
};

const Index = ({ navigation }: Props) => {
  const handleLanguageSelect = (language: string) => {
    Alert.alert('Language Selected', `You chose ${language}.`);
    if (language === 'Eng') {
      navigation.navigate('Eng');
    } else if (language === 'Malay') {
      navigation.navigate('BM');
    } else if (language === 'Chi') {
      navigation.navigate('Chi');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Language</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="English"
          onPress={() => handleLanguageSelect('Eng')}
          color="#2196F3"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Malay"
          onPress={() => handleLanguageSelect('Malay')}
          color="#2196F3"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Chinese"
          onPress={() => handleLanguageSelect('Chi')}
          color="#2196F3"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Rate Us"
          onPress={() => navigation.navigate('RatingPage')}
          color="#f39c12"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 15,
    width: '100%',
  },
});

export default Index;
