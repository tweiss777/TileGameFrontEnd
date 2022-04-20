import { useContext } from "react";
import AuthenticationContext from "../Contexts/AuthContext";


export const useAuthentiation =  ()=> useContext(AuthenticationContext)