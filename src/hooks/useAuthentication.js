import { useContext } from "react";
import { Authentication } from "../Contexts/AuthContext";


export const useAuthentiation =  ()=> useContext(Authentication)