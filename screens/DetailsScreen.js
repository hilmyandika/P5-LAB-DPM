import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Appbar, Card, Button, Text, Avatar } from 'react-native-paper';

export default function DetailsScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <Appbar.Header style={styles.appbarHeader}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Details" />
      </Appbar.Header>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title 
            title="Details Screen" 
            subtitle="Here is more info"
            left={(props) => <Avatar.Icon {...props} icon="information" />} 
          />
          <Card.Content>
            <Text variant="bodyMedium">
              Welcome to the details page! Here, you can dive deeper into the specifics and uncover fascinating insights.
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" buttonColor="#6200ea" onPress={() => navigation.goBack()}>
              Back to Home
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  appbarHeader: {
    backgroundColor: 'rgba(177, 177, 177, 0.9)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(177, 177, 177, 0.9)',
  },
});