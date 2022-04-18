import {useState} from 'react' 
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'
export default function Login(){
    const navigate = useNavigate();
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [errors,setErrors] = useState(false);


    function handleLogin(){
        setErrors(false)
        if(!username || !password){
            setErrors(true)
            return
        }
        // need to authenticate user before navigating to page
        navigate('/home')
        

    }


    return(
        <>
        <h1>Welcome to Tile Game!!!!</h1>
        {errors && <p>One or more fields is missing</p>}
        <div className='login-container'>
            <label>user name</label>
            <input type='email' placeholder='email' onChange={(event) => setUserName(event.target.value)} />
            <label>password</label>
            <input type='password' placeholder='password' onChange={(event) => setPassword(event.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button variant='info'>Create Account</button> 
        </div>
        </>
    )



}