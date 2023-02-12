import {
  add,
  Canvas,
  Circle,
  LinearGradient,
  vec,
  sub,
  Fill,
  useLoop,
  mix,
  BackdropFilter,
  Blur,
  useDerivedValue,
  Text,
  useFont,
} from "@shopify/react-native-skia";
import * as React from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const c = vec(width / 2, (height / 2) * 1.5);
const r = c.x - 32;

export default function MyBlur() {
  const font = useFont(require("./assets/Raleway.ttf"), 32);

  const progress = useLoop({ duration: 5000 });
  const start = useDerivedValue(
    () => sub(c, vec(0, mix(progress.current, r, r))),
    [progress]
  );
  const end = useDerivedValue(
    () => add(c, vec(0, mix(progress.current, r, r / 2))),
    [progress]
  );
  const radius = useDerivedValue(
    () => mix(progress.current, r, r / 2),
    [progress]
  );

  if (font === null) return null;

  return (
    <Canvas style={{ width: "100%", height: "100%", position: "absolute" }}>
      <Fill color={"#fff"} />
      <Circle c={c} r={radius}>
        <LinearGradient start={start} end={end} colors={["cyan", "pink"]} />
      </Circle>
      <Circle cx={200} cy={290} c={c} r={100}>
        <LinearGradient start={start} end={end} colors={["orange", "purple"]} />
      </Circle>
      <Circle cx={0} cy={0} c={c} r={radius}>
        <LinearGradient start={start} end={end} colors={["pink", "pink"]} />
      </Circle>
      <BackdropFilter filter={<Blur blur={10} />}></BackdropFilter>
      <Text x={100} y={100} font={font} text="Hello Skia" />
    </Canvas>
  );
}
