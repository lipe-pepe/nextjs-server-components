import React from "react";

interface ServerComponentWrapperProps {
  children: React.ReactNode;
}

const ServerComponentWrapper: React.FC<ServerComponentWrapperProps> = ({
  children,
}) => {
  return (
    <div className="px-8 pb-8 border-2 border-green border-dashed rounded-sm">
      <p className="font-medium text-green p-0">Server Component</p>
      {children}
    </div>
  );
};

export default ServerComponentWrapper;
