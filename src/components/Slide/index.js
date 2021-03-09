import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// item é o item que está sendo renderizado e o index é em qual posição ele
// está atualmente
export default function Slide({ item, index }) {
  return (
    <View>
      <TouchableOpacity>
        <Image 
          source={{ uri: item.img }}
          style={styles.carouselImg}
        />
        <Text style={styles.carouselText}>{item.title}</Text>
        <Icon 
          name="play-circle-outline" 
          size={30} 
          color="#FFF" 
          style={styles.carouselIcon} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselImage: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  carouselText: {
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold',
  },

  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});