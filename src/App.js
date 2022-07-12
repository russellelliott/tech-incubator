import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "./firebase-config"

function App() {

  //using "use state hooks" to get data from fields
  
  //registerEmail = email used to register account
  //setRegisterEmail = set the email

  //register the email and password and set them
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")

  //login the email and password and set them
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  //function to register, login, and logout are async await, because they deal with firebase stuff inside

  //function to register user
  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user)
    } catch(error){
      console.log(error.message); //print error to console log
    }

  };

  //function to login existing user
  const login = async () => {

  }
  
  //function to log user out of their account
  const logout = async () => {

  }
  return (
    <div className="App">
      <div>
        <h3>Registered User</h3>
        <input placeholder = "Email..." onChange={(event) => {setRegisterEmail(event.target.value)}}></input>
        <input placeholder = "Password..." onChange={(event) => {setRegisterPassword(event.target.value)}}></input>
        <button onClick = {register}>Create User</button>
      </div>
      <div>
        <h3>Login</h3>
        <input placeholder = "Email..." onChange={(event) => {setLoginEmail(event.target.value)}}></input>
        <input placeholder = "Password..." onChange={(event) => {setLoginPassword(event.target.value)}}></input>
        <button>Login</button>
      </div>

      <h4>User Logged In: </h4>
      <button>Sign Out</button>
    </div>
  );
}

export default App;
