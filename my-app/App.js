import React, { useState } from 'react';
import { FlatList, View, RefreshControl, StyleSheet, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LanguageListItem from './components/LanguageListItem';
import jsLogo from './assets/js.png';
import pythonLogo from './assets/python.png';
import defaultAvatar from './assets/defaultAvatar.png';

const langs = [
  { id: '1', lang: 'JavaScript', logo: jsLogo, experience: '3 года' },
  { id: '2', lang: 'Python', logo: pythonLogo, experience: '1 год' }
];

const LanguageScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={langs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LanguageListItem lang={item.lang} logo={item.logo} experience={item.experience} />
        )}
        horizontal
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const AboutScreen = () => {
  return (
    <View style={styles.profileContainer}>
      <Image source={defaultAvatar} style={styles.avatar} />
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Даниил</Text>
        <Text style={styles.bio}>Я учусь на программиста!</Text>
        <Text style={styles.bio}>У меня есть небольшой опыт в разработке веб-приложений.</Text>
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О Себе" component={AboutScreen} />
        <Tab.Screen name="Мои языки программирования" component={LanguageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
    margin: 10,
    elevation: 6,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  profileInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  bio: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default App;
