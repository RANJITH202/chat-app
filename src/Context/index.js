import { createContext } from "react";

const appState = {
  isLogin: false,
  setIsLogin: () => {},
  userId: '', 
  setUserId: () => {},
  isDarkMode: false, 
  setDarkMode: () => {},
}

export const appContext = createContext(appState);
export default appContext;