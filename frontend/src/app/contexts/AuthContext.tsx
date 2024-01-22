import { createContext, useCallback, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";

interface AuthContextValue {
    signedIn: boolean;
    signIn(acessToken: string):  void;
    signOut(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({children} : {children: React.ReactNode}) {
   const [signedIn, setSignedIn] = useState<boolean>(()=> {
    const storedAcessToken = localStorage.getItem(localStorageKeys.ACESS_TOKEN_JWT);

    return !!storedAcessToken;
   });

   const signIn = useCallback((acessTokenJWT: string) => {
    localStorage.setItem(localStorageKeys.ACESS_TOKEN_JWT, acessTokenJWT)
  
    setSignedIn(true)

}, [])

const signOut = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACESS_TOKEN_JWT)
    setSignedIn(false)
}, [])

return (
    <AuthContext.Provider
     value={{
         signedIn: signedIn,
         signIn,
         signOut
          }}
     >   
        {children}
    </AuthContext.Provider>
)
}
