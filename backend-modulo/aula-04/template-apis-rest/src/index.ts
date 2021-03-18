//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

// **************** EXERCICIO 03  **************** //


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

//encontrar usuario por nome
app.get("/users", (req: Request, res: Response)=>{
let errorCode: number = 400;
    try {
        //buscar por query parames
        //metodo get nao recebe body
        const name: string = req.query.name as string
        //usuarios que tenham esse nome
        //criando uma copia
        const myUsers = users;
        const myUser = myUsers.find((u)=>{
            return u.name === name
        })
        
        if(!myUser){
            errorCode = 404;
            throw new Error("user not found")
        }
        
        res.status(200).send({user: myUser})
    }
    
    catch(error){
        res.status(errorCode).send({message: error.message})
    }
    
    //postman: http://localhost:3003/users?name=Alice


})

// **************** EXERCICIO 02  **************** //


//encontrar usuario por id
app.get("/users/id", (req: Request, res: Response)=>{
    let errorCode: number = 400;
        try {
            const id: number = Number(req.params.id);
            
            if(isNaN(id)){ //se id nao for um numero
                errorCode = 422 //unprocesabled entity = passando um valor que nao da pra lidar (tipo diferente)
                throw new Error("invalid value for id. pls send a number")
            }
            
            const myUsers = users;
            const myUser = myUsers.find((u)=>{
                return u.id === id
            })
            
            if(!myUser){
                errorCode = 404;
                throw new Error("user not found")
            }
            
            res.status(200).send({myUser})
        }
        
        catch(error){
            res.status(errorCode).send({message: error.message})
        }
        
        //postman:
        //http://localhost:3003/users/2
    
    })
    

//encontrar usuario por type
app.get("/users/:type", (req: Request, res: Response)=>{
    let errorCode: number = 400;
        try {
            const type: string = req.query.type as string
            
            const myUsers = users;
            
            const myUser: user | undefined = myUsers.find((u)=>{
                return u.type === req.params.type
            })
            
            if(!myUser){
                errorCode = 404;
                throw new Error("user not found")
            }
            
            res.status(200).send({myUser})
        }
        
        catch(error){
            res.status(errorCode).send({message: error.message})
        }
        
        //postman:
    //postman: http://localhost:3003/users?type=Oi
    
    })    
    
    
    




//A)Qual método HTTP você deve utilizar para isso?*
//RESPOSTA: GET

//B)Como você indicaria a **entidade** que está sendo manipulada?*
//RESPOSTA: users

// **************** EXERCICIO 02  **************** //




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
