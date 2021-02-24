import axios from "axios"
import {goToFeed} from '../Router/Coordinator';
//body = form
export const login = (body, clear, history) => {
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login", body)
    .then((res)=>{
        console.log(res)
        localStorage.setItem("token", res.data.token) //se tem ou nao um token
        console.log(res.data.message)
        goToFeed(history)
        clear()
    }).catch((err)=>{ 
        console.log(err.response.data.message)
        alert(err.response.data.message)
    })
  } 
  
  export const signUp = (body, clear, history) => {
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup", body)
    .then((res)=>{
        console.log(res)
        localStorage.setItem("token", res.data.token) //se tem ou nao um token
        console.log('aqui', res.data.message)
        goToFeed(history)
        clear()
    }).catch((err)=>{ 
        console.log(err.response.data.message)
        if(err.response.data.message === "Email já cadastrado"){
            alert('Erro no login')
            alert('email ja cadastrado')
        }
    })
  } 