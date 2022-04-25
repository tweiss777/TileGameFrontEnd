import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { authenticateUser,setAuthHeader,signUp } from "../services/server";

export const Authentication = createContext();


export default function AuthenticationProvider({children}){
    
    const navigate = useNavigate();
    const [errors, setErrors] = useState(false);
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [email,setEmail] = useState('')
    // const [highScore,setHighScore] = useState(0);
    // const [lastScore,setLastScore] = useState(0);
    useEffect(() => {
        console.log("use effect")
        if(localStorage.getItem('token')){
            setIsAuthenticated(true)
        }
    },[])
    
    console.log(isAuthenticated)
    async function createAccount({email,firstname,lastname,password,confirmPassword}){
        try{
            const token = await signUp(email,firstname,lastname,password,confirmPassword);    
            navigate('/home')
            localStorage.setItem('token',token)
            localStorage.setItem('email',email)
            setEmail(email)
            setIsAuthenticated(true)

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
            setEmail(username)
            localStorage.setItem('token',token)
            localStorage.setItem('email',username)
            setIsAuthenticated(true)
            // setHighScore(await fetchHighScore(email))
            // setLastScore(await fetchScore(email));
            
            navigate('/home')
            
        }
        catch(error){

            setErrors(true)
        }
        
    }

    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        setIsAuthenticated(false)
        navigate('/')
    }


    return (
        <>
            <Authentication.Provider value={{login:login,logout,createAccount,errors,isAuthenticated,email}}>
                {children}
            </Authentication.Provider>
        </>
    )






}