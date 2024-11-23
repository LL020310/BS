import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Eng: { greeting?: string };
  Chi: { greeting?: string };
  BM: { greeting?: string };
};

type EngNavigationProp = StackNavigationProp<RootStackParamList, 'Eng'>;

type Props = {
  navigation: EngNavigationProp;
  route: { params: { greeting?: string } };
};

const Eng = ({ route }: Props) => {
  const { greeting } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {greeting || 'Welcome to the English Learning Page!'}
      </Text>

      <View style={styles.suggestedMaterialsContainer}>
        <Text style={styles.suggestedText}>Suggested Learning Materials:</Text>
        <Text style={styles.materialLink}>
          <Text style={styles.linkText}>XXXXXXXX.com</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  suggestedMaterialsContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    width: '90%',
  },
  suggestedText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  materialLink: {
    fontSize: 16,
    color: '#007BFF',
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});

export default Eng;