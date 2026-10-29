import { ReactNode } from "react";
import "./btn.css";

export interface buttonProps {
  variant?: "primary" | "outline" | "outline-dark";
  size?: "default" | "icon" | "icon-sm";
  children?: ReactNode;
  onClick?: () => void;
}

export default function Btn({ children, variant = "primary", size = "default", onClick }: buttonProps) {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
    >
      <span className="btn__inner">{children}</span>
    </button>
  );
}
