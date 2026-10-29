import { useState } from "react";
import Btn from "../btn/Btn";
import WindowBase from "../windowBase/WindowBase";
import "./about-window.css";

export default function AboutWindow() {

  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <WindowBase
      title={"lorem"}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      contentClassName="about-window__wrapper"
    >
      <div className="about-window">
        lorem ipsum
        <div className="about-window__external">test</div>
        <Btn>tester</Btn>
      </div>
    </WindowBase>
  );
}
