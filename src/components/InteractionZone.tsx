import { Html, useKeyboardControls } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";
import { useRef, useState } from "react";

export interface colliderPropsType {
  position: [number, number, number];
  size: [number, number, number];
  onEnter?: () => void;
  onExit?: () => void;
}

export interface promptPropsType {
  position?: [number, number, number];
  button: string;
  onClick: () => void;
}

export interface InteractionZonePropsType {
  colliderProps: colliderPropsType;
  promptProps: promptPropsType;
}

export function InteractionZone({ colliderProps, promptProps }: InteractionZonePropsType) {
  const trigger = useRef<"IDLE" | "ENTERED" | "EXITED">("IDLE");
	const [canPressButton, setCanPressButton] = useState<boolean>(false);
	
	const pressedInteract = useKeyboardControls((state) => state.interact);
	
	if (pressedInteract && canPressButton) {
		promptProps.onClick()
  }

  const handleEnter = () => {
    if (trigger.current !== "IDLE") return;

    //@ts-ignore
    trigger.current = "ENTERED";

    //show prompt
    setCanPressButton(true);
    colliderProps.onEnter?.();
  };

	const handleExit = () => {
		 
    if (trigger.current !== "ENTERED") return;
    //@ts-ignore
    trigger.current = "EXITED";

    //hide prompt
    setCanPressButton(false);
    colliderProps.onExit?.();

    trigger.current = "IDLE";
	};

  return (
    <group position={colliderProps.position}>
      <CuboidCollider
        sensor
        args={colliderProps.size}
        onIntersectionEnter={handleEnter}
        onIntersectionExit={handleExit}
      />
      <Html
        center
        position={promptProps.position}
        className={canPressButton ? "" : "hidden"}
      >
        {promptProps.button}
      </Html>
    </group>
  );
}
