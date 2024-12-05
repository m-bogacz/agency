import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "normal" | "medium" | "small";
  variant: "primary" | "secondary" | "tertiary";
  loading?: boolean;
}

export const Button = ({ children }: ButtonProps) => {
  return <div>{children}</div>;
};
