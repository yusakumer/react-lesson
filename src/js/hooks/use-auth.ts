import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const USER_NAME_KEY = "user-name"

export const useAuth = () => {
  const { isLoggedIn, setIsLoggedIn, username, setUserName } =
    useContext(AuthContext);

    const login = () => {
        if (username) {
            setIsLoggedIn(true);
            localStorage.setItem(USER_NAME_KEY,username)
        }
    }

    const logout = () => {
        setIsLoggedIn(false);
        setUserName("");
        localStorage.removeItem(USER_NAME_KEY);
    };

    //マウント時にlocalstrageからusernameを取得する
    //usernameがしゅときできた場合はログイン中として扱う
    useEffect(()=> {
        const userNameDate = localStorage.getItem(USER_NAME_KEY);
        if 
        (userNameDate) {
            setUserName(userNameDate);
            setIsLoggedIn(true);
        }
    },[])

    return {isLoggedIn,login,logout,username,setUserName}
};
