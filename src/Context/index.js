import { createContext } from "react";

const appState = {
  isLogin: false,
  setIsLogin: () => {},
  userId: '', 
  setUserId: () => {},
  isDarkMode: false, 
  setDarkMode: () => {},
  socket: null, 
  setSocket: () => {},
}

export const appContext = createContext(appState);
export default appContext;