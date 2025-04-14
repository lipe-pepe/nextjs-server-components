import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return (
    <div className="flex justify-center p-4 bg-blue font-bold rounded-lg hover:bg-blue-400">
      {children}
    </div>
  );
};

export default Button;
