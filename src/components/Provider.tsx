import { Instance } from "@react-three/drei";
import Stone1Instances from "./models/Stone1Instances";

export default function Provider({
  children,
  sky = "dark",
}: React.PropsWithChildren<{ sky?: "dark" | "light" }>) {
  return (
    <>
      <color args={[sky === "dark" ? "#000" : "#fff"]} attach="background" />
      {children}
    </>
  );
}
