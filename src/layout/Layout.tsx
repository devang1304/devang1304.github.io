import { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./Layout.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout" id="top">
      <SiteHeader />
      <main className="layout-main">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default Layout;
