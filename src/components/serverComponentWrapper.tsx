import React from "react";

interface ServerComponentWrapperProps {
  children: React.ReactNode;
}

const ServerComponentWrapper: React.FC<ServerComponentWrapperProps> = ({
  children,
}) => {
  return (
    <div className="px-4 pb-4 border-2 border-blue-800 border-dashed rounded-sm">
      <p className="font-medium text-blue-800">Server Component</p>
      {children}
    </div>
  );
};

export default ServerComponentWrapper;
