import React from "react";

interface ServerComponentWrapperProps {
  children: React.ReactNode;
}

const ClientComponentWrapper: React.FC<ServerComponentWrapperProps> = ({
  children,
}) => {
  return (
    <div className="px-8 pb-8 border-2 border-purple border-dashed rounded-sm">
      <p className="font-medium text-purple">Client Component</p>
      {children}
    </div>
  );
};

export default ClientComponentWrapper;
