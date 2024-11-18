import { PropsWithChildren } from "react";

type Props = {
  color?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const primaryColorClassNames =
  "border-transparent bg-foreground text-background hover:bg-[#383838]";
const secondaryColorClassNames =
  "border-black/[.08] hover:bg-[#f2f2f2] hover:border-transparent";

export const Button = ({
  children,
  ...restProps
}: PropsWithChildren<Props>) => {
  return (
    <button
      style={{
        border: "1px solid rgb(60, 80, 224)",
        borderRadius: "6px",
        color: "rgb(60, 80, 224)",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "500",
        height: "48px",
        padding: "10px 20px",
      }}
      {...restProps}
    >
      {children}
    </button>
  );
};

export const LoginButton = ({
  color,
  children,
  ...restProps
}: PropsWithChildren<Props>) => {
  return (
    <button
      {...restProps}
      className={`rounded-full border border-solid h-10 sm:h-12 px-4 sm:px-5 text-sm sm:text-base transition-colors flex items-center justify-center ${
        color === "primary" ? primaryColorClassNames : secondaryColorClassNames
      }`}
    >
      {children}
    </button>
  );
};
