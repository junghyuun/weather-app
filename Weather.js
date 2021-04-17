import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: "thunderstorm-outline",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Drizzle: {
    iconName: "",
    gradient: []
  },
  Rain: {
    iconName: "",
    gradient: []
  },
  Snow: {
    iconName: "",
    gradient: []
  },
  Atmosphere: {
    iconName: "",
    gradient: []
  },
  Clear: {
    iconName: "",
    gradient: []
  },
  Clouds: {
    iconName: "",
    gradient: []
  },
  Mist: {
    iconName: "",
    gradient: []
  },
  Smoke: {
    iconName: "",
    gradient: []
  },
  Haze: {
    iconName: "",
    gradient: []
  },
  Dust: {
    iconName: "",
    gradient: []
  },
  Fog: {
    iconName: "",
    gradient: []
  },
  Sand: {
    iconName: "",
    gradient: []
  },
  Ash: {
    iconName: "",
    gradient: []
  },
  Squall: {
    iconName: "",
    gradient: []
  },
  Tornado: {
    iconName: "",
    gradient: []
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
        <Ionicons 
          name={weatherOptions[condition].iconName}
          size={90} 
          color="white" 
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainer} />
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
    color: "white"
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});