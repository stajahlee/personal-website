import { PropsWithChildren } from "react";
import { Navigation } from "./navigation";

const PageWithNavigation: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default PageWithNavigation;
