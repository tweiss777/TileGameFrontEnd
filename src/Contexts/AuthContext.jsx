import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { authenitcateUser} from "../services/authentication";



export const Authentication = createContext();


export default function AuthenticationProvider({children}){
    const navigate = useNavigate();
    const [errors, setErrors] = useState(false);


    function createAccount({email,firstname,lastname,password,confirmPassword}){
        console.log("Creating account")
        // here we can throw an error and create acccount form can catch 
    }


    async function login(username,password){
        setErrors(false);
        if (!username || !password) {
        setErrors(true);
        return;
    }
        try{
            const token = await authenitcateUser(username,password)
            // store the token in a cookie
            navigate('/home')

        }
        catch(error){

            setErrors(true)
        }
        
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