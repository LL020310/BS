import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RatingPageNavigationProp = StackNavigationProp<RootStackParamList, 'RatingPage'>;

type Props = {
  navigation: RatingPageNavigationProp;
};

export type RootStackParamList = {
  Home: undefined;
  Eng: { greeting?: string };
  BM: { greeting?: string };
  Chi: { greeting?: string };
  RatingPage: undefined;
};

const RatingPage = ({ navigation }: Props) => {
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (!rating || !feedback) {
      Alert.alert('Incomplete', 'Please provide a rating and feedback.');
      return;
    }

    Alert.alert('Thank You', `Your feedback has been submitted!\nRating: ${rating}\nFeedback: ${feedback}`);
    
    navigation.navigate('Home');
    
    setRating('');
    setFeedback('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Language Edu Platform</Text>

      <Text style={styles.label}>Rate (1-5):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter rating"
        value={rating}
        onChangeText={setRating}
      />

      <Text style={styles.label}>Your Feedback:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />

      <Button title="Submit Feedback" onPress={handleSubmit} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default RatingPage;