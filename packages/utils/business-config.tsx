import React, { useContext } from "react";

interface BusinessContextProps {
  apis?: any;
  useRequest?: any;
  fileRequest?: any;
  children?: React.ReactNode | React.ReactNode[];
}

const BusinessContext = React.createContext<BusinessContextProps>({});

export const BusinessConfigProvider = (props: BusinessContextProps) => {
  const { children, ...rest } = props;
  return (
    <BusinessContext.Provider value={rest}>
      {props.children}
    </BusinessContext.Provider>
  );
};

export const useBusinessConfig = () => {
  const context = useContext(BusinessContext);
  return context;
};
