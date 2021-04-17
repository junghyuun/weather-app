import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    title: "Thunderstorm",
    subtitle: "Actually, outside of the house",
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"]
  },

  Drizzle: {
    title: "Drizzle",
    subtitle: "Is like rain, but gay",
    iconName: "weather-hail",
    gradient: ["#89f7fe", "#66a6ff"]
  },

  Rain: {
    title: "Rain",
    subtitle: "Go outside and dance",
    iconName: "weather-pouring",
    gradient: ["#00c6fb", "#005bea"]
  },

  Snow: {
    title: "Snow",
    subtitle: "Do you wanna build a snowman? fuck no",
    iconName: "weather-snowy",
    gradient: ["#7de2fc", "#b9b6e5"]
  },

  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89f7fe", "#66a6ff"]
  },

  Clear: {
    title: "Sunny",
    subtitle: "Sunny as fuck",
    iconName: "weather-sunny",
    gradient: ["#F37335", "#FDC830"]
  },

  Clouds: {
    title: "Clouds",
    subtitle: "I know, fucking boring",
    iconName: "weather-cloudy",
    gradient: ["#d7d2cc", "#304352"]
  },

  Mist: {
    title: "Mist",
    subtitle: "It's like you have no glasses on",
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"]
  },

  Smoke: {
    title: "Smoke",
    subtitle: "It's like you have no glasses on",
    iconName: "weather-windy-variant",
    gradient: ["#2c3e50", "#bdc3c7"]
  },

  Haze: {
    title: "Haze",
    subtitle: "Just don't go outside",
    iconName: "weather-hazy",
    gradient: ["#be93c5", "#7bc6cc"]
  },

  Dust: {
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻",
    iconName: "weather-sunny-alert",
    gradient: ["#3e5151", "#decba4"]
  },

  Fog: {
    title: "Fog",
    subtitle: "Just don't go outside",
    iconName: "weather-fog",
    gradient: ["#be93c5", "#7bc6cc"]
  },

  Sand: {
    title: "Sand",
    subtitle: "Thanks a lot China 🖕🏻",
    iiconName: "weather-sunny-alert",
    gradient: ["#3e5151", "#decba4"]
  },

  Ash: {
    title: "Ash",
    subtitle: "Just don't go outside",
    iiconName: "weather-sunny-alert",
    gradient: ["#3e5151", "#decba4"]
  },

  Squall: {
    title: "Tornado",
    subtitle: "Never go outside",
    iconName: "weather-windy",
    gradient: ["#373b44", "#4286f4"]
  },

  Tornado: {
    title: "Tornado",
    subtitle: "Fly to the sky, gogo",
    iconName: "weather-tornado",
    gradient: ["#3b8d99", "#6b6b83"]
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons 
          name={weatherOptions[condition].iconName}
          size={84} 
          color="white" 
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  temp: {
    fontSize: 40,
    color: "white",
    marginTop: 10,
    textAlign: "left"
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    color: "white",
    fontSize: 36,
    marginBottom: 10
  },

  subtitle: {
    color: "white",
    fontSize: 20,
    textAlign: "left"
  },

  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start",
    flex: 1
  }
});