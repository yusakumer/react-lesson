import React, { PropsWithChildren } from "react";

type Props = {
    onClick: () => void;
    color: "red"| "blue";
}

export const Button = ({onClick,color,children}:PropsWithChildren<Props>) => {
    const style = color === "red" ? "bg-red-400" : "bg-cyan-100";

    console.log("Button")
  return (
    <button
      className={`border w-auto ${style}`} onClick={onClick}>
      {children}
    </button>
  );
};
