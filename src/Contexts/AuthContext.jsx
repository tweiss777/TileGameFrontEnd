import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const Authentication = createContext();


export default function AuthenticationProvider({children}){
    const navigate = useNavigate();
    const [errors, setErrors] = useState(false);


    function createAccount({email,firstname,lastname,password,confirmPassword}){
        console.log("Creating account")
        // here we can throw an error and create acccount form can catch 
    }


    function login(username,password){
        setErrors(false);
        if (!username || !password) {
        setErrors(true);
        return;
    }
        console.log("logging in")
        navigate('/home')
        
    }

    function logout(){
        console.log("logging out")
    }


    return (
        <>
            <Authentication.Provider value={{login:login,logout,createAccount,errors}}>
                {children}
            </Authentication.Provider>
        </>
    )






}