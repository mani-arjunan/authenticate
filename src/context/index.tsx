import React, { useContext } from "react";

const PassengersDetails = React.createContext([]);

export function PassengersContextProvider(props: {
  children: React.ReactNode;
}) {
  return (
    <PassengersDetails.Provider value={[]}>
      {props.children}
    </PassengersDetails.Provider>
  );
}

export const usePassengerDetailsContext = () => useContext(PassengersDetails);
