import React, { createContext, useState } from "react";
import MeData from "../json/all.json"


export const StoreContext = createContext();

// Make a Provider
export const StoreProvider = ({ children }) => {  
  const [me, setMe] = useState(MeData );
  const [bottle, setbottle] = useState(0 );
  const [water, setwater] = useState(0 );
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [initialNavigationState, setInitialNavigationState] =useState();
  const store = {
    meState: [me, setMe],
    bottleState:[bottle, setbottle],
    waterState:[water, setwater],
    LoadingCompleteState:[isLoadingComplete, setLoadingComplete],
    NavigationState: [initialNavigationState, setInitialNavigationState]
  };
  return (
   <StoreContext.Provider value={store}>
      {children}
   </StoreContext.Provider>
  );
};

