import { ReactNode } from "react";
import "./default-window.css";
import Btn from "../btn/Btn";
import IconClose from "../icons/iconClose.svg?react";

export interface DefaultWindowProps {
  title: string;
  setIsopen?: (isOpen: boolean) => void;
  children?: ReactNode;
}

export default function DefaultWindow({ title, setIsopen, children }: DefaultWindowProps) {
  const stopDrag = (event: PointerEvent | MouseEvent | TouchEvent) => {
    event.stopPropagation();
  };

  return (
    <div className={`default-window`}>
      <div className="default-window__header">
        <p>{title}</p>
        <Btn
          variant="outline-dark"
          size="icon-sm"
          onClick={() => setIsopen?.(false)}
        >
          <IconClose />
        </Btn>
      </div>
      <div
        className="default-window__content"
        onPointerDown={stopDrag}
        onMouseDown={stopDrag}
        onTouchStart={stopDrag}
      >
        {children}
      </div>
    </div>
  );
}
