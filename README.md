Sample ReactNative app that uses [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)


Setup

- npx react-native init <APP_NAME>
- npm install --save react-native-gesture-handler
- npx react-native run-android


Notes: See App.js for implementation

- Everything must be wrapped in GestureHandlerRootView 
- swipeRight, swipeLeft, etc are constants that define how to handle gesture events. Follow [api docs](https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/tap-gesture) to properly configure
- order of gesture constants in the GestureDetector block matter especially if gesture events can overlap.


snippets:

```javascript

// how to handle swipe to right event
const swipeRight = Gesture.Fling()
.direction(Directions.RIGHT)
.onStart((e) => {
  console.log("swipe right")
});

// Specify all event handlers and corresponding view
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

```
