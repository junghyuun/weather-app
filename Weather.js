import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Ionicons name="rainy-outline" size={90} color="black" />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainer} />
    </View>
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
    fontSize: 40
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});