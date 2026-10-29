import { Children, ReactNode, useState } from "react";
import "./window-base.css";
import WindowComponent from "react-flexi-window";
import DefaultWindow, { DefaultWindowProps } from "../DefaultWindow/DefaultWindow";

export interface WindowBaseProps extends DefaultWindowProps {
  w?: number;
  h?: number;
  x?: number;
  y?: number;
  children?: ReactNode;
  isOpen?: boolean;
  setIsOpen?: (isOPen: boolean) => void;
  contentClassName?: string;
}

export default function WindowBase(props: WindowBaseProps) {
 
  const { children, contentClassName, setIsOpen } = props;

  return (
    <WindowComponent
      {...props}
      maxW="viewport"
      maxH="viewport"
      boundary={true}
      overflow="visible"
      className={`window-base ${setIsOpen ? "window-base--open" : ""}`}
    >
      <div className={`window-base__content ${contentClassName}`}>
        <DefaultWindow
          {...props}
          setIsopen={setIsOpen}
        >
          {children}
        </DefaultWindow>
      </div>
    </WindowComponent>
  );
}
