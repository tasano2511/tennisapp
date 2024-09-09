import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

const images = [
  require('./assets/tenniscourt.jpg'),
  require('./assets/tenniscourt2.jpg'),
  require('./assets/tenniscourt3.jpg')
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LifeTime Open Tennis Championship - Charlotte</Text>
      <Text style={styles.subtitle}>Monthly event</Text>
      <Text style={styles.description}>"Join and Play your match!"</Text>
      <Text style={styles.description}>"Sign up for 2024 Sept Open tournament"</Text>
      <SliderBox
        images={images}
        sliderBoxHeight={400}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        autoplay
        circleLoop
      />
      <Image source={require('./assets/react.png')} style={styles.logo} />
      <Text style={styles.footer}>footer2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  footer: {
    fontSize: 20,
    marginTop: 20,
  },
});
