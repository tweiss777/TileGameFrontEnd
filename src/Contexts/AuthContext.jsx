import { createContext } from "react";

export const Authentication = createContext();

export default function AuthenticationProvider({children}){

    function createAccount(){
        console.log("Creating account")
    }


    function login(){
        console.log("logging in")
    }

    function logout(){
        console.log("logging out")
    }


    return (
        <>
            <Authentication.Provider value={{login:login,logout:logout,createAccount:createAccount}}>
                {children}
            </Authentication.Provider>
        </>
    )






}