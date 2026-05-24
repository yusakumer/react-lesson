import { createContext, PropsWithChildren, useState } from "react";
import * as React from "react";

type AuthContextType = {
    isLoggedIn:boolean;
    setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>;
    username: string;
    setUserName:React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext <AuthContextType>({
    isLoggedIn:false,
    setIsLoggedIn: () => {},
    username:"",
    setUserName: () => {}
});

export const AuthProvider = ({children}:PropsWithChildren) => {
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
    const [username,setUserName] = useState<string>("");

    return(<AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,username,setUserName}}>{children}</AuthContext.Provider>)
};