import React from "react";
import SideNavigation from "../Navigation/SideNavigation";

function Layout({ children }) {
  return (
    <div className="flex min-h-dvh">
      <SideNavigation />
      <main className="p-6 w-full container mx-auto">{children}</main>
    </div>
  );
}

export default Layout;
