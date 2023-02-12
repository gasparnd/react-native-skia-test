import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import {
  Box,
  BoxShadow,
  Canvas,
  Circle,
  Fill,
  Group,
  Image,
  BackdropBlur,
  rect,
  rrect,
  useImage,
} from "@shopify/react-native-skia";
import React from "react";

export const HelloWorld = () => {
  const size = 256;
  const r = size * 0.33;
  return (
    <Canvas style={{ flex: 1 }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={size - r} cy={r} r={r} color="magenta" />
        <Circle cx={size / 2} cy={size - r} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
};

const SkiaBox = () => (
  <Canvas style={{ width: 256, height: 256 }}>
    <Fill color="#add8e6" />
    <Box box={rrect(rect(64, 64, 128, 128), 24, 24)} color="#add8e6">
      <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" inner />
      <BoxShadow dx={-10} dy={-10} blur={10} color="#c7f8ff" inner />
      <BoxShadow dx={10} dy={10} blur={10} color="#93b8c4" />
      <BoxShadow dx={-10} dy={-10} blur={10} color="#c7f8ff" />
    </Box>
  </Canvas>
);

const WithImage = () => {
  const { width, height } = useWindowDimensions();
  const image = useImage(require("./assets/cat1.jpg"));

  if (!image) {
    return null;
  }

  return (
    <Canvas style={{ flex: 1 }}>
      <Fill color="ecf3ff" />
      <Image
        image={image}
        x={0}
        y={0}
        width={width}
        height={height}
        fit="cover"
      />
      <BackdropBlur
        blur={20}
        clip={{
          x: width * 0.1,
          y: width * 0.1,
          width: width * 0.8,
          height: height * 0.8,
        }}
      >
        <Fill color="#ffffff10" />
      </BackdropBlur>
    </Canvas>
  );
};

const Test = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Canvas style={{ width, height }}>
        <Fill color="#ecf3ff" />
        <Box box={rrect(rect(100, 100, 150, 150), 24, 24)} color="#ecf3ff">
          <BoxShadow dx={10} dy={10} blur={10} color="#fff" />
          <BoxShadow
            dx={-10}
            dy={-10}
            blur={10}
            color="rgba(174, 174, 192, 0.6) "
          />
        </Box>
        <Box box={rrect(rect(100, 300, 150, 150), 100, 100)} color="#ecf3ff">
          <BoxShadow
            dx={10}
            dy={10}
            blur={10}
            color="rgba(174, 174, 192, 0.6) "
            inner
          />
          <BoxShadow dx={-10} dy={-10} blur={10} color="#fff" inner />
          <BoxShadow
            dx={10}
            dy={10}
            blur={10}
            color="rgba(174, 174, 192, 0.6)"
          />
          <BoxShadow dx={-10} dy={-10} blur={10} color="#fff" />
        </Box>

        <Box box={rrect(rect(40, 500, 300, 128), 24, 24)} color="#ecf3ff">
          <BoxShadow
            dx={-10}
            dy={-10}
            blur={10}
            color="rgba(174, 174, 192, 0.6)"
          />
          <BoxShadow dx={10} dy={10} blur={10} color="#fff" />
        </Box>
        <Box box={rrect(rect(92, 540, 200, 50), 10, 10)} color="#ecf3ff">
          <BoxShadow
            dx={10}
            dy={10}
            blur={10}
            color="rgba(174, 174, 192, 0.6)"
            inner
          />
          <BoxShadow dx={-10} dy={-10} blur={10} color="#fff" inner />
        </Box>
      </Canvas>
    </View>
  );
};

export default function App() {
  return <Test />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
