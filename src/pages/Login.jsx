import {useState} from 'react' 
import { Button } from 'react-bootstrap';

export default function Login(){
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [errors,setErrors] = useState(false);


    function handleLogin(){
        setErrors(false)
        if(!username || !password){
            setErrors(true)
            return
        }

    }


    return(
        <>
        {errors && <p>One or more fields is missing</p>}
        <div className='login-container'>
            <input type='email' placeholder='email' onChange={(event) => setUserName(event.target.value)} />
            <input type='password' placeholder='password' onChange={(event) => setPassword(event.target.value)} />
            <Button onClick={handleLogin}>Login</Button>
        </div>
        </>
    )



}