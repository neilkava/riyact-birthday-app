import { ReactNode } from "react";

interface Propuhs {
  children: ReactNode;
}

const Alert = ({ children }: Propuhs) => {
  const blueAlertBootstrapClass = "alert alert-primary";
  return (
    <div className={blueAlertBootstrapClass}>{children}</div>
  )
}

export default Alert