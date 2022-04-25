import axios from "axios"

// returns a token 
export async function authenitcateUser(username,password){
    const credentials = {
        username: username,
        password: password
    }

        const response = await axios.post('http://localhost:8080/user/login',credentials)
        console.log(response)
        return response.data;

}