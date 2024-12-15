import React from "react";
import SideNavigation from "../Navigation/SideNavigation";

function Layout({ children }) {
  return (
    <div className="flex min-h-dvh">
      <SideNavigation />
      <main className="pt-14 p-6 w-full container mx-auto lg:pt-6">{children}</main>
    </div>
  );
}

export default Layout;
