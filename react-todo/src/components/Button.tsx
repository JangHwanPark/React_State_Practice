import React from "react";

interface ButtonProps {
  text: string;
  type: "submit" | "text"
}

const Button: React.FC<ButtonProps> = (
  {
    text
  }) => {

  return (
    <button>
      {text}
    </button>
  );
};

export default Button;