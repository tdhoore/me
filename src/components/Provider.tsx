export default function Provider({
  children,
  sky = "dark",
}: React.PropsWithChildren<{ sky?: "dark" | "light" }>) {
  return <>{children}</>;
}
//<color args={[sky === "dark" ? "#000" : "#8FD2F7"]} attach="background" />
