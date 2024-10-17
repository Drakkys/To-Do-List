import React, { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1 className="text-5xl pb-4 font-bold">{children}</h1>
      <div className="border-b border-gray-300"></div>
    </div>
  );
};

export default Header;
