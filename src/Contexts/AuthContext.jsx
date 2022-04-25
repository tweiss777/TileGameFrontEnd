import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { authenticateUser,setAuthHeader,signUp } from "../services/server";



export const Authentication = createContext();


export default function AuthenticationProvider({children}){
    const navigate = useNavigate();
    const [errors, setErrors] = useState(false);


    async function createAccount({email,firstname,lastname,password,confirmPassword}){
        try{
            const token = await signUp(email,firstname,lastname,password,confirmPassword);    
            navigate('/home')
            localStorage.setItem('token',token)

        }
        catch(error){
            console.error(error)
        }
        // here we can throw an error and create acccount form can catch 
    }


    async function login(username,password){
        setErrors(false);
        if (!username || !password) {
        setErrors(true);
        return;
    }
        try{
            const token = await authenticateUser(username,password)
            // store the token in a cookie
            setAuthHeader(token)
            navigate('/home')
            
        }
        catch(error){

            setErrors(true)
        }
        
    }

    function logout(){
        localStorage.removeItem('token')
        navigate('/')
    }


    return (
        <>
            <Authentication.Provider value={{login:login,logout,createAccount,errors}}>
                {children}
            </Authentication.Provider>
        </>
    )






}