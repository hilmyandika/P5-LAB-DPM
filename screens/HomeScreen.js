import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Appbar, Card, Button, Text, Avatar } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.backgroundContainer}>
      <Image source={require('../assets/background.jpg')} style={styles.backgroundImage} />
      <Appbar.Header style={styles.appbarHeader}>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title 
            title="Welcome!" 
            subtitle="Explore the app"
            left={(props) => <Avatar.Icon {...props} icon="home" />} 
          />
          <Card.Content>
            <Text variant="bodyMedium">
              Start your journey with us! Navigate, explore, and experience the best design and functionality in one app.
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" buttonColor="#6200ea" onPress={() => navigation.navigate('Details')}>
              Go to Details
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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