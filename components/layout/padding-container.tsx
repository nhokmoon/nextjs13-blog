import React, { ReactNode } from "react";

const PaddingContainer = ({ children }: { children: ReactNode }) => {
  return <div className="px-8 w-full max-w-7xlm mx-auto">{children}</div>;
};

export default PaddingContainer;
