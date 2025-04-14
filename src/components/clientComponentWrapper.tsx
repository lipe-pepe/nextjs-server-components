import React from "react";

interface ServerComponentWrapperProps {
  children: React.ReactNode;
}

const ClientComponentWrapper: React.FC<ServerComponentWrapperProps> = ({
  children,
}) => {
  return (
    <div className="px-4 pb-4 border-2 border-purple-800 border-dashed rounded-sm">
      <p className="font-medium text-purple-800">Client Component</p>
      {children}
    </div>
  );
};

export default ClientComponentWrapper;
