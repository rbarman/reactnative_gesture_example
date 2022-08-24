import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView, Directions } from 'react-native-gesture-handler';

export default function App() {      

  const swipeRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart((e) => {
      console.log("swipe right")
    });

  const swipeLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart((e) => {
      console.log("swipe left")
    });
  
  const singleTap = Gesture.Tap()
    .numberOfTaps(1)
    .onStart(() => {
      console.log("single tap")
    });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      console.log("double tap")
    });

  const styles = StyleSheet.create({
    base: {
      width: '100%',
      height: '100%',
      backgroundColor: 'blue'
    },
  });
 
  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={Gesture.Exclusive(
        // order matters!
        swipeRight, 
        swipeLeft, 
        doubleTap,
        singleTap
      )}>
        <View style={styles.base} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}